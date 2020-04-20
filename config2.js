// st4zz playlist
const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'https://raw.githubusercontent.com/st4zzc0de/APlayer/master/landing.html',
    title: 'Maho Player',
    repo: 'APlayer',
    'edit-link': 'https://github.com/st4zzc0de/APlayer',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Ecosystem', path: '/ecosystem'
            },
            {
                title: 'Support APlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '生态', path: '/zh-Hans/ecosystem'
            },
            {
                title: '支持 APlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'aplayer',
            tags: ['english', 'zh-Hans'],
            url: 'https://github.com/st4zzc0de/APlayer'
        }),
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer0();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

// list playlist center
function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrcType: 3,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'Link0',
            cover: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/47/df/b6/47dfb61e-3a3b-26fe-4507-ebcbd6765519/075679858412.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Yummy',
            artist: 'Justin Bieber',
            url: 'Link-0',
            cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/f6/55/48/f65548ea-93c8-8c8f-c1e6-d1561b192e83/19UM1IM02770.rgb.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'End of Time',
            artist: 'K-391, Alan Walker & Ahrix',
            url: 'Link1',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/ed/82/9aed8218-ccb9-b429-45b6-cda6aea868e1/195081074047.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'Link2',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/58/e8/c1/58e8c1eb-ea72-7d5d-f0be-31c36ec8f6cd/886448229674.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'Link3',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/de/fd/fb/defdfb06-5624-610a-4476-700910fc4816/COCP-41063.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'Link4',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/74/ee/6e/74ee6eec-8dfa-2f41-f819-25e0bc6a5fbd/SKZ_LEVANTER.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'Link5',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/74/ee/6e/74ee6eec-8dfa-2f41-f819-25e0bc6a5fbd/SKZ_LEVANTER.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Run Away (Japanese Version)',
            artist: 'TXT',
            url: 'Link6',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/9c/ef/37/9cef37ea-94d9-44d3-a748-a18c931dd892/19UM1IM06938.rgb.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'Link7',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/e9/30/13/e930134e-988b-1bcb-b021-160eebd141c8/VPCC-82322.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'Link8',
            cover: 'https://is4-ssl.mzstatic.com/image/thumb/Music117/v4/e6/71/0f/e6710f5d-ff92-5bf0-6ff0-62c81de5cc28/190295818739.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Stay With Me',
            artist: 'Seven Billion Dots',
            url: 'JLink7',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e8/ce/9d/e8ce9de9-4bb6-32dc-b3ee-c6535ec4a274/886448154143.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'JLink8',
            cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/7b/1e/63/7b1e6390-dd10-9138-5293-ee5a69f27df8/jacket_SEXX01939B01A_550.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: '‎Ariel NOAH (ft. Ariel Nidji)',
            url: 'Link9',
            cover: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/46/39/bc/4639bc17-1bdf-a6a9-7f37-60eafa2de4f9/dj.cvpippdo.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'End of Time0',
            artist: 'K-391, Alan Walker & Ahrix0',
            url: 'Link10',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/ed/82/9aed8218-ccb9-b429-45b6-cda6aea868e1/195081074047.jpg/1000x1000bb.jpg0',
            theme: '#505d6b'
        }, {
            name: 'End of Time1',
            artist: 'K-391, Alan Walker & Ahrix1',
            url: 'Link11',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/ed/82/9aed8218-ccb9-b429-45b6-cda6aea868e1/195081074047.jpg/1000x1000bb.jpg1',
            theme: '#46718b'
        }, {
            name: 'Black Catcher',
            artist: 'VICKEBLANKA',
            url: 'Link+0',
            cover: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/7a/65/1c/7a651ca3-5cb5-e936-6c87-bf63193f8ab9/ANTCD-A0000000841.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }]
    });
}

// list playlist footer
function aplayer0 () {
    window.ap0 = new APlayer({
        container: document.getElementById('aplayer0'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Black Catcher',
            artist: 'VICKEBLANKA',
            url: 'Link+0',
            cover: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/7a/65/1c/7a651ca3-5cb5-e936-6c87-bf63193f8ab9/ANTCD-A0000000841.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'Yummy',
            artist: 'Justin Bieber',
            url: 'Link-0',
            cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/f6/55/48/f65548ea-93c8-8c8f-c1e6-d1561b192e83/19UM1IM02770.rgb.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'End of Time1',
            artist: 'K-391, Alan Walker & Ahrix1',
            url: 'Link11',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/ed/82/9aed8218-ccb9-b429-45b6-cda6aea868e1/195081074047.jpg/1000x1000bb.jpg1',
            theme: '#505d6b'
        }, {
            name: 'End of Time0',
            artist: 'K-391, Alan Walker & Ahrix0',
            url: 'Link10',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/ed/82/9aed8218-ccb9-b429-45b6-cda6aea868e1/195081074047.jpg/1000x1000bb.jpg0',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: '‎Ariel NOAH (ft. Ariel Nidji)',
            url: 'Link9',
            cover: 'https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/46/39/bc/4639bc17-1bdf-a6a9-7f37-60eafa2de4f9/dj.cvpippdo.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'JLink8',
            cover: 'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/7b/1e/63/7b1e6390-dd10-9138-5293-ee5a69f27df8/jacket_SEXX01939B01A_550.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Stay With Me',
            artist: 'Seven Billion Dots',
            url: 'JLink7',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e8/ce/9d/e8ce9de9-4bb6-32dc-b3ee-c6535ec4a274/886448154143.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'Link8',
            cover: 'https://is4-ssl.mzstatic.com/image/thumb/Music117/v4/e6/71/0f/e6710f5d-ff92-5bf0-6ff0-62c81de5cc28/190295818739.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'Link7',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/e9/30/13/e930134e-988b-1bcb-b021-160eebd141c8/VPCC-82322.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Run Away (Japanese Version)',
            artist: 'TXT',
            url: 'Link6',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/9c/ef/37/9cef37ea-94d9-44d3-a748-a18c931dd892/19UM1IM06938.rgb.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'Link5',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/74/ee/6e/74ee6eec-8dfa-2f41-f819-25e0bc6a5fbd/SKZ_LEVANTER.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'Link4',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/74/ee/6e/74ee6eec-8dfa-2f41-f819-25e0bc6a5fbd/SKZ_LEVANTER.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'Link3',
            cover: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/de/fd/fb/defdfb06-5624-610a-4476-700910fc4816/COCP-41063.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'Link2',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/58/e8/c1/58e8c1eb-ea72-7d5d-f0be-31c36ec8f6cd/886448229674.jpg/1000x1000bb.jpg',
            theme: '#505d6b'
        }, {
            name: 'End of Time',
            artist: 'K-391, Alan Walker & Ahrix',
            url: 'Link1',
            cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9a/ed/82/9aed8218-ccb9-b429-45b6-cda6aea868e1/195081074047.jpg/1000x1000bb.jpg',
            theme: '#46718b'
        }, {
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'Link0',
            cover: 'https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/47/df/b6/47dfb61e-3a3b-26fe-4507-ebcbd6765519/075679858412.jpg/1000x1000bb.jpg',
            theme: '#ebd0c2'
        }]
    });
}
