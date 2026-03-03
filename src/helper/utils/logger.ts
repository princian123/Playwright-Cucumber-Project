import {transports,format} from "winston"

export function options(scenarioName:String){
return{
    transports:[
        new transports.File({
            filename: `test-results/logs/${scenarioName}/log/log`,
            level:'info',
            format:format.combine(
                format.timestamp({format:'MM-DD-YYY HH:MM:SS'}),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
            )


})

    ]
}

}