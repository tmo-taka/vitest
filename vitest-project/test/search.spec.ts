import { vi, describe, expect, test } from 'vitest';
import { useRoute } from 'vue-router'
import Search from '../pages/search.vue'
import { mount } from '@vue/test-utils'

// 型をmockに合わせた
// const userRouterMock = useRouter as Vitest.Mocked<typeof useRouter>;

vi.mock('vue-router');
// vi.mock("#app", () => ({ useRouter: vi.fn() }));

describe('search page', () => {
    const mockRoute = (name?:string) => {
        useRoute.mockReturnValueOnce({
            query: {
                name,
            },
        })
    }


    test('query name is abc', () =>{
        mockRoute('abc')
        const wrap = mount(Search);

        const h1 = wrap.find('h1').text();
        expect(h1).toBe('こんにちはabcさん')
    })

    test('query name is not defined', () =>{
        mockRoute()
        const wrap = mount(Search);

        const h1 = wrap.find('h1').text();
        expect(h1).toBe('こんにちは名無しさん')
    })
});