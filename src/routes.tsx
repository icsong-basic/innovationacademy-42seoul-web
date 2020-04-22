import Home from './containers/Home';
import About from './containers/About';
import Admission from './containers/Admission';
import Studies from './containers/Studies';
import Faq from './containers/Faq';
import News from './containers/News';
import Apply from './containers/Apply';
import NotFound from './containers/NotFound';

type route = {
    path: string, name?: string, component: any, exact?: boolean
}
const routes: route[] = [
    { path: "/", component: Home, exact: true },
    { path: "/apply", component: Apply, name: "Apply" },
    { path: "/about", component: About, name: "ABOUT" },
    { path: "/admission", component: Admission, name: "ADMISSION" },
    { path: "/studies", component: Studies, name: "STUDIES" },
    { path: "/faq", component: Faq, name: "FAQ" },
    { path: "/news", component: News, name: "NEWS" },
    { path: "/404", exact: true, component: NotFound, name: "404 ERROR" },
]

export default routes;