const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'APlayer',
    repo: 'DIYgod/APlayer',
    twitter: 'DIYgod',
    'edit-link': 'https://github.com/MoePlayer/APlayer/tree/master/docs',
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
            url: 'https://aplayer.js.org'
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

function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrcType: 3,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
            lrc: '',
            theme: '#505d6b'
        }]
    });
}

function aplayer0 () {
    window.ap0 = new APlayer({
        container: document.getElementById('aplayer0'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer2 () {
    window.ap2 = new APlayer({
        container: document.getElementById('aplayer2'),
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer3 () {
    window.ap3 = new APlayer({
        container: document.getElementById('aplayer3'),
        mini: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
            lrc: '',
            theme: '#505d6b'
        }]
    });
}

function aplayer4 () {
    window.ap4 = new APlayer({
        container: document.getElementById('aplayer4'),
        lrcType: 3,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer5 () {
    window.ap5 = new APlayer({
        container: document.getElementById('aplayer5'),
        lrcType: 3,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
            lrc: '',
            theme: '#505d6b'
        }]
    });
}

function aplayer6 () {
    window.ap6 = new APlayer({
        container: document.getElementById('aplayer6'),
        mini: true,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer7 () {
    window.ap7 = new APlayer({
        container: document.getElementById('aplayer7'),
        audio: [{
            name: '光るなら(HLS)',
            artist: 'Goose house',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            theme: '#ebd0c2',
            type: 'hls'
        }, {
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
            theme: '#505d6b'
        }]
    });
}

function aplayer8 () {
    window.ap8 = new APlayer({
        container: document.getElementById('aplayer8'),
        theme: '#e9e9e9',
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
        }]
    });

    const colorThief = new ColorThief();
    window.ap8.on('switchaudio', function (index) {
        if (!window.ap8.options.audio[index].theme) {
            colorThief.getColorAsync(window.ap8.options.audio[index].cover, function (color) {
                window.ap8.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
            });
        }
    });
}

function aplayer9 () {
    window.ap9 = new APlayer({
        container: document.getElementById('aplayer9'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Eye of the Storm',
            artist: 'ONE OK ROCK',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABfTiIBX7Xks7Q3uVzKHZqLa/01.%20Eye%20of%20the%20Storm.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAD2eQWtmJ6Tx6qoKcMHQPz5a/01.%20Eye%20of%20the%20Storm.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Let Me Hear',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADO1Cq0o6OhfGLgvTrF56bua/01.%20Let%20Me%20Hear.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADpX-kwoztgPHT88u_WFk4ca/01.%20Let%20Me%20Hear.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'SHINE',
            artist: 'Fear, and Loathing in Las Vegas',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAVg3n5u6Tl2hJLFFJMgQcOa/01.%20SHINE.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABYmjjRCYDv_Z6m3n_X60Sna/01.%20SHINE.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Answer',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACyM-stwWndC6LYNwAEi5jIa/01.%20Answer.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAMGuoU_8hITDgWdrEcY2B_a/01.%20Answer.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Answer (Japanese Ver.)',
            artist: 'ATEEZ',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAA_SJS4fFbYzyBpRFTjBFJ2a/01.%20Answer%20%28Japanese%20Ver%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACM08jcS3B7-uSfVnOiYdwTa/01.%20Answer%20%28Japanese%20Ver%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Levanter',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABZoMZqb-ApSEJxmco_JRVSa/01.%20Levanter.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#505d6b'
        }, {
            name: 'Levanter -Japanese ver.-',
            artist: 'Stray Kids',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACc6UpnWJf7ZyCPim_BE3nxa/01.%20Levanter-Japanese%20ver.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_Rzr1WHwhvtUiC1TiYXCNa/01.%20Levanter.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: '9 and Three Quarters (Run Away) (Japanese Version)',
            artist: 'TXT',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABPV6nRVnfbJuo9UJS7TSMIa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AADJkbUVwxNNl3Hfk1jgzT6Qa/01.%209%20and%20Three%20Quarters%20%28Run%20Away%29%20%28Japanese%29.jpg',
            lrc: '',
            theme: '#46718b'
        }, {
            name: 'Prover',
            artist: 'milet',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AACOzRK2ZAwV1QIfQt-2xga2a/01.%20Prover.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAAS4yBatzMkltzDowph1HrNa/01.%20Prover.jpg',
            lrc: '',
            theme: '#ebd0c2'
        }, {
            name: 'Moshimo Mata Itsuka',
            artist: 'NOAH',
            url: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AABHySy2fZjg4K-N246TXIfZa/01.%20Moshimo%20Mata%20Itsuka.mp3',
            cover: 'https://dl.dropboxusercontent.com/sh/vreqwf97r686xns/AAB_ZpTFFY0vZgyNf6FUCY0ya/01.%20Moshimo%20Mata%20Itsuka.jpg',
            lrc: '',
            theme: '#505d6b'
        }]
    });
}