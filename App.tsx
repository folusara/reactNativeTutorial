/* eslint-disable prettier/prettier */
import * as React from 'react';
import Intro from './components/Intro';
import Stack from './navigators/Stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  const [showRealApp, setShowRealApp] = React.useState<boolean>(false);

  if (showRealApp){
    return (
      <Provider store={store}>
        <Stack />
    </Provider>
    );
  } else {
    return <Intro setShowRealApp={setShowRealApp} />;
  }
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     // paddingHorizontal: 24,
//     backgroundColor: 'black',
//     height: '100%',
//     width: '100%',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
