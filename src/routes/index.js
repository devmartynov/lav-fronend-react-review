import IndexPage from '../routes/IndexPage';
import ProfilePage from '../routes/ProfilePage';
import CalculatorPage from '../routes/CalculatorPage';
import WeatherPage from '../routes/WeatherPage';
import CurrencyConverterPage from '../routes/CurrencyConverterPage';
import TodoPage from './TodoPage';

export const ROUTE_ROOT = 'root';
export const ROUTE_PROFILE = 'profile';
export const ROUTE_CALCULATOR = 'calculator';
export const ROUTE_WEATHER = 'weather';
export const ROUTE_CURRENCY_CONVERTER = 'currency_converter';
export const ROUTE_TODO = 'todo';

export default [
    {
        id: ROUTE_ROOT,
        path: '/',
        component: IndexPage,
        exact: true,
    },
    {
        id: ROUTE_CURRENCY_CONVERTER,
        path: '/currency-converter',
        component: CurrencyConverterPage,
         exact: true,
    },
    {
        id: ROUTE_WEATHER,
        path: '/weather',
        component: WeatherPage,
         exact: true,
    },
    {
        id: ROUTE_CALCULATOR,
        path: '/calculator',
        component: CalculatorPage,
         exact: true,
    },
    {
        id: ROUTE_PROFILE,
        path: '/profile',
        component: ProfilePage,
         exact: true,
    },
    {
        id: ROUTE_TODO,
        path: '/todo',
        component: TodoPage,
         exact: true,
    },
];

