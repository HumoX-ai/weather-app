"use client";
import Loader from "./loader";
import { Combobox } from "@headlessui/react";
import { cities } from "../../cities";

interface WeatherSearchProps {
  city: string;
  setCity: (value: string) => void;
  fetchData: () => void;
  loading: boolean;
}

const WeatherSearch = ({
  city,
  setCity,
  fetchData,
  loading,
}: WeatherSearchProps) => {
  const filteredCities =
    city === "" ? [] : cities.filter((person) => person.startsWith(city));

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold text-center text-white">Weather Search</h1>

      <Combobox value={city} onChange={setCity}>
        <Combobox.Input
          onChange={(event) => setCity(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-6 bg-transparent "
          placeholder="Search city"
          autoComplete="off"
          aria-label="Search city"
          aria-required
        />
        <Combobox.Options className="h-24 overflow-auto">
          {filteredCities.map((person) => (
            <Combobox.Option key={person} value={person}>
              {({ active }) => (
                <li
                  className={`${
                    active
                      ? "bg-blue-500 text-white cursor-pointer"
                      : "bg-white text-black cursor-pointer"
                  }`}
                >
                  {person}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>

      <button
        onClick={fetchData}
        className="w-full p-2 bg-blue-500 text-white rounded-md flex items-center justify-center mt-6"
      >
        {loading ? <Loader /> : "Search"}
      </button>
    </div>
  );
};

export default WeatherSearch;
