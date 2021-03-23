import App from './App';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux'
// import store from './store'


test('mounts learn react link', () => {
  const app = mount(<App />);
  const header = app.find(".App-header");
  expect(header).toHaveLength(1)
});
