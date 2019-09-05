function checkID(condition) {
        result = "";
        if (condition >= 200 && condition <300)
            result = "Thunderstorm";
        else if (condition >= 300 && condition <400)
            result = "Drizzle";
        else if (condition >= 500 && condition <600)
            result = "Rain";
        else if (condition >=600 && condition <700)
            result = "Snow";
        else if (condition >700 && condition <800)
            result = "Atmosphere";
        else if (condition == 800)
            result = "Clear";
        else if (condition > 800)
            result = "Clouds";
        else
            result = "Something Wrong!!" 
        return result;
    }
export default checkID;

