import { render, screen } from '@testing-library/react';

import Task02 from '../components/02/Task02';

describe('CustomTable', () => {
	test('hello world rendered', async () => {
		render(<Task02 />);

		const helloWorld = await screen.findByText('hello world');
		expect(helloWorld).toBeInTheDocument();
	});
});
