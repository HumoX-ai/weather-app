import { MapPinIcon } from "@heroicons/react/24/outline";
import { WiHumidity } from "react-icons/wi";
import { GiWindSlap } from "react-icons/gi";
import { FaRegSnowflake } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { IoCloudSharp } from "react-icons/io5";
import { TbMist } from "react-icons/tb";
const WeatherDetail = ({ weatherData }: { weatherData: any }) => {
  const currentDate = new Date();
  return (
    <div className="mt-6">
      {weatherData ? (
        <div className="p-4 border border-gray-300 rounded-[20px] max-w-lg mx-auto backdrop-blur-sm bg-white/30 flex justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <MapPinIcon className="w-6 h-6" />
              <h1>{weatherData.name}</h1>
            </div>
            <h1 className="text-2xl font-medium">
              {currentDate.toLocaleDateString("en-GB", { weekday: "long" })}
            </h1>
            <h1 className="text-4xl font-semibold">
              {(((weatherData.main.temp - 32) * 5) / 9).toFixed(0)}°C
            </h1>
            <div className="flex items-center gap-2 text-[12px] font-medium text-yellow-500">
              <h1>
                MAX {(((weatherData.main.temp_max - 32) * 5) / 9).toFixed(0)}°C,
              </h1>
              <h1>
                MIN {(((weatherData.main.temp_min - 32) * 5) / 9).toFixed(0)}°C
              </h1>
            </div>
            <div className="flex items-end gap-4">
              <div className="flex flex-col justify-center">
                <WiHumidity className="w-8 h-8" />
                <h1>{weatherData.main.humidity}%</h1>
              </div>
              <div className="flex flex-col justify-center gap-1">
                <GiWindSlap className="w-6 h-6" />
                <h1>{weatherData.wind.speed}m/s</h1>
              </div>
            </div>
          </div>
          <div>
            {weatherData.weather[0].main === "Clear" ? (
              <IoMdSunny className="w-16 h-16" />
            ) : weatherData.weather[0].main === "Clouds" ? (
              <IoCloudSharp className="w-16 h-16" />
            ) : weatherData.weather[0].main === "Snow" ? (
              <FaRegSnowflake className="w-16 h-16" />
            ) : (
              <TbMist className="w-16 h-16" />
            )}
          </div>
        </div>
      ) : (
        <h1 className="text-center">No weather data avialable</h1>
      )}
    </div>
  );
};

export default WeatherDetail;
