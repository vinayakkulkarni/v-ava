import { mount } from '@vue/test-utils';
import test from 'ava';
import TodoApp from '@/components/TodoApp.vue';

let wrapper;

test.beforeEach(() => {
  wrapper = mount(TodoApp);
});

test('wrapper', (t) => {
  t.is(wrapper.exists(), true);
});

test.afterEach(() => {
    wrapper.unmount();
});