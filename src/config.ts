interface EnvironmentConfig {
    API_BASEURL: string
}

const environment = import.meta.env.MODE;

const ConfigEnv = (): EnvironmentConfig => {
    console.log(environment)

    switch(environment)
    {
        case "development":
            return { 
                API_BASEURL:''
            }
            break;
        case "beta":
            return {
                API_BASEURL:''
            }
            break;
        case "production":
            return {
                API_BASEURL:''
            }
            break;
        default:
            return { 
                API_BASEURL:''
            };
            
    }
}

export default ConfigEnv;

export { environment }