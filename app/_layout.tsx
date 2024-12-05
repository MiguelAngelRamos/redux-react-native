import { Slot } from "expo-router";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Import your global CSS file
import "@/global.css";

const Layout: React.FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Slot/>
      </GestureHandlerRootView>
    </Provider>
  )
}
export default Layout;