import { describe, expect, test, it ,act } from 'vitest';
import { mount } from '@vue/test-utils'
import Top from '../components/Top.vue'

const add = (x:number, y:number):number => {
    return x + y;
}

describe('add', () => {
    test('2 + 3 = 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('3 + 4 != 4', () => {
        expect(add(3, 4)).not.toBe(4);
    });
});

describe('Top Component', () => {
    it('is a Vue instance', async () => {
        const wrapper = mount(Top);
        await expect(wrapper.vm.counter).toBe(0);
        await wrapper.vm.increment();
        await expect(wrapper.vm.counter).toBe(1);
    })
});