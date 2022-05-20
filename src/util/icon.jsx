export const whaticon = (id, icon) =>{
    if(id >= 200 && id <= 232) return {'icon': 'thunderstorm-sharp', 'pack' : "Ionicons"}
    if(id >= 300 && id <= 321) return  {'icon': 'rainy-sharp' , 'pack' : "Ionicons"}
    if(id >= 500 && id <= 504) return {'icon': 'cloud-sun-rain' , 'pack' :'FontAwesome5'}
    if(id == 511 || id >= 600 && id <= 622) return {'icon': 'snow-sharp', 'pack' : "Ionicons"}
    if(id >= 520 && id <= 531) return {'icon': 'rainy-sharp', 'pack' : "Ionicons"}
    if(id >= 701 && id <= 781) return {'icon': 'weather-tornado', 'pack' : 'MaterialCommunityIcons'}
    if(id == 800){
        if(icon == '01d') return {'icon': 'sun', 'pack' :'FontAwesome5'}
        return {'icon': 'moon', 'pack' : 'FontAwesome5'}
    } 
    if(id == 801){
        if(icon == '02d') return {'icon': 'cloud-sun', 'pack' : 'FontAwesome5'}
        return {'icon': 'cloud-moon' , 'pack' : 'FontAwesome5'}
    }
    if(id == 802) return {'icon': 'cloudy-outline', 'pack' : "Ionicons"}
    
    if(id == 803 || id == 804) return {'icon': 'cloudy-sharp' , 'pack' : "Ionicons"}
}