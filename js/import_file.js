const files = [
    'UserActions.30ee83ef27eafec0be61.js',
    '2074.c4642c0407922b16e0d1.js',
    '4826.ea570b7100e8c5e53e11.js',
    'Auth.1f03c0fa42fb94d83a15.js',
    'Filters.781a45b928bd1af34c1a.js',
    'MarkComplete.e9560adcebc4ad54e6bf.js',
    'Misc.a66f8a686e276f997313.js',
    'Pagination.fd8539ea70965c8542c8.js',
    'messages-intl-icu-en-yml.64477e124174f9d771be.js',
    'CatalogIframes.e92a992e0057084c87f3.js',
]
for(i in files){
    var script = document.createElement('script');
    script.setAttribute('src', '../webpack/' + files[i]);
    document.head.appendChild(script);
}