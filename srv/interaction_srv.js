const cds = require('@sap/cds')
module.exports = cds.service.impl(function () {
    this.on('sleep', async () => {
    try {
        let dbQuery = ' Call "sleep"( )'
        //let dbQuery = 'select 1 from dummy;';
        let result = await cds.run(dbQuery, { })
        console.log(result)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
    }),
    this.on('testSomething', async () => {
        try {
            let dbQuery = ' Call "testSomething"( )'
            //let dbQuery = 'select 1 from dummy;';
            console.log('TEST LANCIO DI testSomething')
            console.log('dbQuery: ')
            console.log(dbQuery)
            console.log('Ora lancio in effettivo ...')
            let result = await cds.run(dbQuery, { })
            console.log('Completato. Ora mostro il risultato')
            console.log(result)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
        })
})
