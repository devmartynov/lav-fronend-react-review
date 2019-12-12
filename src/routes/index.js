import IndexPage from '../routes/IndexPage';
import ProfilePage from '../routes/ProfilePage';
import CalculatorPage from '../routes/CalculatorPage';
import WeatherPage from '../routes/WeatherPage';
import CurrencyConverterPage from '../routes/CurrencyConverterPage';
import PropertiesPage from '../routes/PropertiesPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_PROFILE = 'profile';
export const ROUTE_CALCULATOR = 'calculator';
export const ROUTE_WEATHER = 'weather';
export const ROUTE_CURRENCY_CONVERTER = 'currency_converter';
export const ROUTE_PROPERTIES = 'properties';

export default [
    {
        id: ROUTE_PROPERTIES,
        path: '/properties',
        component: PropertiesPage,
    },
    {
        id: ROUTE_CURRENCY_CONVERTER,
        path: '/currencyConverter',
        component: CurrencyConverterPage,
    },
    {
        id: ROUTE_WEATHER,
        path: '/weather',
        component: WeatherPage,
    },
    {
        id: ROUTE_CALCULATOR,
        path: '/calculator',
        component: CalculatorPage,
    },
    {
        id: ROUTE_PROFILE,
        path: '/profile',
        component: ProfilePage,
    },
    {
        id: ROUTE_ROOT,
        path: '/',
        component: IndexPage,
    },
];

