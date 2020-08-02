const size = {
    mobile: '320',
    tablet: '768',
    laptop: '1024',
    desktop: '1440',
};

const mobile = `(min-width: ${size.mobile}px)`;
const tablet = `(min-width: ${size.tablet}px)`;
const laptop = `(min-width: ${size.laptop}px)`;
const desktop = `(min-width: ${size.desktop}px)`;

export default size;
export { mobile, tablet, laptop, desktop };
