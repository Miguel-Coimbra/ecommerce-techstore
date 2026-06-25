const btnSeeProducts = document.getElementById('see-products');
const pageStartScroll = document.getElementById('page-start');
const footerSeeProducts = document.getElementById('show-products-categories');
const bestSellersBanner = document.getElementById('best-sellers');
const siteInfos = document.getElementById('about-us');

function goTo(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
};

btnSeeProducts.addEventListener('click', () => {
    goTo('products-menu');
});

pageStartScroll.addEventListener('click', () => {
    goTo('page-upper-part');
});

footerSeeProducts.addEventListener('click', () => {
    goTo('products-menu');
});

bestSellersBanner.addEventListener('click', () => {
    goTo('best-sellers-row');
});

siteInfos.addEventListener('click', () => {
    goTo('store-info');
});