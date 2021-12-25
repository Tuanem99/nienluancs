import {StylesProvider, jssPreset, createGenerateClassName} from '@material-ui/styles';
import {create} from 'jss';
import jssExtend from 'jss-extend';
import {useSelector} from 'react-redux';
import Layout from './component/Layout';
import LayoutAdmin from './component/LayoutAdmin/Layout.jsx';

import Scrollbars from './component/Scrollbars/Scrollbars'
import Theme from './component/Theme/Theme';

const jss = create({
    ...jssPreset(),
    plugins: [...jssPreset().plugins, jssExtend()],
    insertionPoint: document.getElementById('jss-insertion-point'),
});

const generateClassName = createGenerateClassName();

function App() {
    const admin = useSelector(state => state.user.current.role) === 'ADMIN';

    return (
        <div className="App">
            <StylesProvider jss={jss} generateClassName={generateClassName}>
                <Scrollbars>
                    <Theme>
                        {admin && (
                            <LayoutAdmin/>
                        )}

                        {!admin && (
                            <Layout/>
                        )}
                    </Theme>
                </Scrollbars>
            </StylesProvider>
        </div>

    );
}

export default App;
