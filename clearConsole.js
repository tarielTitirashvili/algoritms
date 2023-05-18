//clear consol

    function clearConsole() {
        const production = process.env.NODE_ENV === 'production'
        if(production) 
            console.log = console.warn = console.error = () => {}
    }
    clearConsole()
