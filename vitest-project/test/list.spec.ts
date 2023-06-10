import { describe, expect, test } from 'vitest';
import { render , screen } from '@testing-library/vue'
import List from '../components/List.vue'

describe('ListComponent', () => {
    test('デフォルトの整理', () =>{
        render(List)
        const list = screen.queryByRole('list');
        expect(list).not.toBeInTheDocument();
    })
});