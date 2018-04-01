import { shallow } from 'vue-test-utils';
import component from '../../lib/components/app.vue';

describe(`App component`, () => {
  let wrapper;

  beforeEach( () => wrapper = shallow(component) );

  it(`should contain 'Hope'`, () => {
    wrapper.text().should.include('Hope');
  });
});
