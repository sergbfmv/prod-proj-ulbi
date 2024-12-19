import { render, screen } from '@testing-library/react';
import { Button, ThemeBtn } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Button is rendered', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('With theme parameter', () => {
    render(<Button theme={ThemeBtn.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
