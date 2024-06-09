const getIndex = (req, res, next) => {
    res.render('index', { title: 'Welcome to TinZoo!' });
}

const getPieski = (req, res, next) => {
    // fetch z pobieraniem danych z bazy danych
    console.log("Pobieram pieski z bazy danych")
}


module.exports = {
    getIndex,
    getPieski
}