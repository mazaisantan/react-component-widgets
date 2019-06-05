const baseUrl = '/ShoppingMall'
export default
{
    root:baseUrl,
    city:baseUrl+"/city",
    login:baseUrl+"/login/:router?",
    user:baseUrl+"/user",
    search:baseUrl+"/search/:category/:keyword?",
    detail:baseUrl+"/detail/:id",
    searchAll:'/search/all/'
}