const scrollbarWidth = () => {

    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = div.style.left = '-9999px';
    div.style.width = div.style.height = '80px';
    div.style.overflow = 'scroll';

    document.body.append(div);
    const width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return width;

};
export default scrollbarWidth;