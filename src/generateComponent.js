import convertTags from './convertTags.js';
import injectProps from './injectProps.js';

export default function generateSVGComponent(svg) {
  const data = injectProps(convertTags(svg));

  return `import PropTypes from 'prop-types';

function Icon(props) {  
  return ${data};
}
  
Icon.propTypes = {
  fill: PropTypes.string,
};

export default Icon;
`;
}
