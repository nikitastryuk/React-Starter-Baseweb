import { Provider as BaseuiStyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import PropTypes from 'prop-types';

const engine = new Styletron();

export function StyletronProvider({ children }) {
  return <BaseuiStyletronProvider value={engine}>{children}</BaseuiStyletronProvider>;
}

StyletronProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
