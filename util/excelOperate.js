var Excel = require("exceljs");


class ExcelUtil{
    constructor(){
        //1.新建工作表
        this.workbook = new Excel.Workbook;
        this.workSheet = workbook.addWorksheet('workSheet');
    }
    //begin格式：‘A1’
    getValue(begipositionStrn){
        let [begin,end] = positionStr.split(':');
        return this.workSheet.getCell(begin).value;
    }

    setValue(positionStr,value){
        let [begin,end] = positionStr.split(':');
        //|-格式
        workSheet.getCell(begin).alignment = { wrapText: true };
        //|-赋值
        workSheet.getCell(end).value = value;
        //|-合并
        workSheet.mergeCells(positionStr);
    }

    save(filename){
        //文件保存
        workbook.xlsx.writeFile(filename + '.xlsx')
        .then(function() {
            console.log('done');
        });

    }
}

export default ExcelUtil;

    