var TransactionImpl = {
  reinitializeTransaction: function() {
        this.transactionWrappers = this.getTransactionWrappers();
        if (this.wrapperInitData) {
            this.wrapperInitData.length = 0;
        } else {
            this.wrapperInitData = [];
        }
        this._isInTransaction = false;
    },

    _isInTransaction: false,
    getTransactionWrappers: null,
    isInTransaction: function() {
        return !!this._isInTransaction;
    },

  perform: function(method, scope, a, b, c, d, e, f) {
    !!this.isInTransaction() ? "development" !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.') : _prodInvariant('27') : void 0;
    var errorThrown;
    var ret;
    try {
        this._isInTransaction = true;
        errorThrown = true;
        this.initializeAll(0);
        ret = method.call(scope, a, b, c, d, e, f);
        errorThrown = false;
    } finally {
        try {
            if (errorThrown) {
                // If `method` throws, prefer to show that stack trace over any thrown
                // by invoking `closeAll`.
                try {
                    this.closeAll(0);
                } catch (err) {}
            } else {
                // Since `method` didn't throw, we don't want to silence the exception
                // here.
                this.closeAll(0);
            }
        } finally {
            this._isInTransaction = false;
        }
    }
    return ret;
  },

  initializeAll: function(startIndex) {
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          try {
              // Catching errors makes debugging more difficult, so we start with the
              // OBSERVED_ERROR state before overwriting it with the real return value
              // of initialize -- if it's still set to OBSERVED_ERROR in the finally
              // block, it means wrapper.initialize threw.
              this.wrapperInitData[i] = OBSERVED_ERROR;
              this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
          } finally {
              if (this.wrapperInitData[i] === OBSERVED_ERROR) {
                  // The initializer for wrapper i threw an error; initialize the
                  // remaining wrappers but silence any exceptions from them to ensure
                  // that the first error is the one to bubble up.
                  try {
                      this.initializeAll(i + 1);
                  } catch (err) {}
              }
          }
      }
  },

  closeAll: function(startIndex) {
      !this.isInTransaction() ? "development" !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : _prodInvariant('28') : void 0;
      var transactionWrappers = this.transactionWrappers;
      for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          var initData = this.wrapperInitData[i];
          var errorThrown;
          try {
              // Catching errors makes debugging more difficult, so we start with
              // errorThrown set to true before setting it to false after calling
              // close -- if it's still set to true in the finally block, it means
              // wrapper.close threw.
              errorThrown = true;
              if (initData !== OBSERVED_ERROR && wrapper.close) {
                  wrapper.close.call(this, initData);
              }
              errorThrown = false;
          } finally {
              if (errorThrown) {
                  // The closer for wrapper i threw an error; close the remaining
                  // wrappers but silence any exceptions from them to ensure that the
                  // first error is the one to bubble up.
                  try {
                      this.closeAll(i + 1);
                  } catch (e) {}
              }
          }
      }
      this.wrapperInitData.length = 0;
    }
  };