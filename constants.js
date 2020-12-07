const instructions = [];

const songs = {
    '12250': {
        title: 'Must Have Love',
        singer: '브라운아이드걸스 & SG워너비',
        lyrics: {
            hl: [[206.6, 'Singing all around'], 
            [213, '함께 있단 이유로 행복했었던'], [219.5, '우리들의 겨울날의 소중한 기억들', 'top'], 
            [226, '좋은 날엔 언제나 네가 있기에', 'bottom'], [232, '잊을 수 없는 Memories', 'shoes'], 
            [239.5, '잊을 수 없는~', 'face'], [242, 'Memories'], [261, ' ']],
            v1: [ [84, 'This season is the time for love'], [90.3, '익숙한 음악소리 가득한 거리'], 
            [94, '하얀 거품처럼 내려와서', 'top'],[98.3, '소복히 쌓이는 눈'], 
            [104.3, '멀리서 들려오는 맑은 종소리', 'bottom'], [107, '날 위해 준비해둔 것 같아'], 
            [110.3, '너무 아름다워 ooh'],[117, '말을 하지 않아도 알 수 있잖아', 'shoes'], 
            [123, '나를 항상 웃게 하는 너만 있으면 돼'], [130, '내 맘을 다 아나봐 하늘에서도', 'face'], 
            [135, '세상 가득히 눈이 와'], [137, ' ']] 
            }
    },

    '12170' : {
        title: '우리 사랑하게 됐어요',
        singer : '가인 & 조권',
        lyrics : {
          
            hl : [[139 , ' '], [144, '사랑인걸까 너와 나'], [148.8, '같은 맘일까 너와 나'], 
            [152.7, '우리가 사랑하게 됐다고','top'], [154.7, '말하고 싶어'], 
            [156.7, '아껴줄게 얼만큼'],[158, '지켜줄게'], [162.8, '겨울보다 하얗게 그대를','bottom'], 
            [166.7, '흰눈이 다 녹아도'], [171, '지금처럼만 함께 할래'],[175, '사랑인가봐 그대와 나'], 
            [178.8, '시작인가봐 그대와 나','shoes'],[180.8, '이제야 내가'], [183, '할 수 있는 말'], 
            [184.8, '그대와 함께'], [187, '나누고 싶어'], [191, '사랑인가봐 너와 나','face'], 
            [195, '시작됐나봐 너와 나'], [199, '우리 둘 사랑하게 됐다고'], [203, '말할 수 있어'], [209, ' ']],
        
            v1 : [[19.5 , '전주 중'], [24, '맨 처음 그날의 난'], [28, '아마 몰랐겠지 이런 날','top'], 
            [32.5, '어색했었던 우리 모습이'], [36.8, '어제만 같은데',], [40.8, '기억하고 있을까'], 
            [44.8, '우리 잠시 멀리 있던 날','bottom'], [48.8, '잠들기 힘든 내 모습'], [54.5, '내 맘이 자꾸 널 찾던 날~'], 
            [59, '어떤 맘일까 그대와 나'], [63, '같은 맘일까 그대와 나','shoes'], [67, '한가지 내게 분명한 것은'],
            [71, '함께 있어야 웃는다는 것'],[75, '사랑인걸까 너와 나'], [79.8, '같은 맘일까 너와 나','face'], 
            [83, '우리가 사랑하게 됐다고'], [86, '말해도 될까'], [89, ' ']]
            }
    },

    '93626': {
        title : 'Santa tell me',
          singer : 'Ariana Grande',
           lyrics : {
                //https://www.youtube.com/watch?v=ByqHu6UqDmk
                hl : [[160 , ' '], [164.8, 'Santa, tell me if you are really there'], [169, 'Dont make me fall in love again if he wont be here'],
                [170.8, 'Next year','top'], [175, 'Santa, tell me if he really cares'], [179, 'Cause I cant give it all away if he wont be here'],
                [181, 'Next year','bottom'], [185, 'Santa, tell me if you are really there'], [189, 'Dont make me fall in love again if he wont be here','shoes'],
                [191.8, 'Next year'], [194.8, 'Santa, tell me if he really cares','face'], [199, 'Cause I cant give it all away if he wont be here'],
                [202, 'Next year'],  [204, ' ']],
                
                v1 : [[9.7, '전주 중'], [14.8, 'Santa, tell me if you are really there'], [19, 'Dont make me fall in love again if he wont be here'], 
                [20.8, 'Next year','top'], [25, 'Santa, tell me if he really cares'], [29.5, 'Cause I cant give it all away if he wont be here'], 
                [31, 'Next year','bottom'], [33.8, 'Feeling Christmas all around'], [36, 'And Im trying play it cool'],
                [37.8, 'But its hard to focus'], [41, 'When I see him walking cross the room','shoes'], [43.5, 'Let it snow is blasting out'], 
                [46, 'But I wont get in the mood'], [50 , 'Im avoiding every mistletoe until I know','face'], 
                [54, 'Its true love that he thinks of'], [56.8, 'So next Christmas'], [60, 'Im not all alone, boy'], [60.5, ' ']] 
            }
    },

    '202012' : {
        tittle : 'All I want for Chirstmas is you',
          singer : 'Mariah Carey',
            lyrics : {
              
                hl : [[57 , ' '], [60, 'I dont want a lot for Christmas'], [63, 'There is just one thing I need'], 
                [66, 'I dont care about the presents','top'], [70, 'Underneath the Christmas tree'], 
                [73, 'I dont need to hang my stocking'], [76, 'There upon the fireplace','bottom'], 
                [79.8, 'Santa Claus wont make me happy'], [82.8, 'With a toy on Christmas day'],
                [85.8, 'I just want you for my own','shoes'], [89, 'More than you could ever know'], 
                [92, 'Make my wish come true','face'], [98, 'All I want for Christmas is you'], [101,'You baby'],
                [102, ' ']],
                    
                v1 : [[9 , '전주 중'], [15, 'I dont want a lot for Christmas'], [19.8, 'There is just one thing I need','top'],
                [23.8, 'I dont care about the presents'], [26.8, 'Underneath the Christmas tree'],
                [29.8, 'I just want you for my own'], [33.8, 'More than you could ever know'],
                [39, 'Make my wish come true'], [57, 'All I want for Christmas is you','bottom'],
                [60, 'I dont want a lot for Christmas'], [63, 'There is just one thing I need'],
                [66, 'I dont care about the presents'], [70, 'Underneath the Christmas tree','shoes'], 
                [73, 'I dont need to hang my stocking'], [76, 'There upon the fireplace'], [79.8, 'Santa Claus wont make me happy'], 
                [82.8, 'With a toy on Christmas day'],[85.8, 'I just want you for my own','face'], 
                [89, 'More than you could ever know'], [92, 'Make my wish come true'], [98, 'All I want for Christmas is you'], 
                [101,'You baby'] ,[102, ' ']]
            }
    },

    '93516' : {
        title : '미리메리크리스마스',
          singer : '아이유(feat.천둥)',
            lyrics : {
              
                hl : [[89 , ' '], [92.8, '하얀 눈이 내려올때면'], [97, '온 세상이 물들을때면','top'], 
                [99, '눈꽃이 피어나'], [100.8, '또 빛이나'], [103.8, '눈이 부신 너처럼','bottom'], 
                [107.8, '사랑할수 밖에 없어서'], [112, '사랑한 네 손 잡고서~','shoes'], 
                [115.5, '첫눈 위를 걸어 발자국을 새겨','face'], [117, '이 길 끝까지'], 
                [121, '걸어갈거야 With you'],  [123, ' ']],
                
                v1 : [[44, ' '], [49, '쿵쿵 가슴이 왜 이렇게 가쁘니 yeah'], [51, '꾹꾹 참아도 자꾸'], 
                [52.8, '네 생각이 나잖아 Oh'], [54, 'You You I love you'], [56, 'and I know you love me too'], 
                [60, '네가 내게 불러준 you\'re my boo','top'], [63.8, 'You 아직 꿈만 같아'], 
                [67, 'And you 마치 선물같아'],[70.8, 'For you  네 품에 안겨도','bottom'], 
                [72.8, '늘 불안 불안해'], [75, '꿈처럼 깰까봐'], [79.5, 'You 꼭 안아줘야만해'], 
                [82, 'And you 아껴줘야만해'], [85, 'For you 큰맘 먹고'], [89, '네꺼 돼준걸 하늘에게 감사해','shoes'], 
                [92.8, '하얀 눈이 내려올때면'], [97, '온 세상이 물들을때면'], [99, '눈꽃이 피어나'], 
                [100.8, '또 빛이나',], [103.8, '눈이 부신 너처럼','face'], [107.8, '사랑할수 밖에 없어서'], 
                [112, '사랑한 네 손 잡고서~'], [115.5, '첫눈 위를 걸어 발자국을 새겨'], [117, '이 길 끝까지'], 
                [121, '걸어갈거야 With you'],  [123, ' ']]
            }
    },

    '12408' : {
        title : '첫눈',
        singer : '엑소',
          lyrics : {
            
            hl : [[158 , ' '], [162.7, '너를 만나면 눈물 차 올라'], [165, '바보같은 난 아무 말 못해'], 
            [168.8, '말해줘 메리 메리 크리스마스'], [171, '안녕 잘지내는거지','top'], [174, '눈이 내리면 멍든 가슴이'],
            [177, '모두 하얗게 다 덮여지게 될까'], [179.8, '미안해 잘해주지 못해','bottom'], [182.2, '후회만 가득 가득했던'], 
            [185, '너를 만나면 눈물 차 올라'],[188,'바보같은 난 아무 말 못해','shoes'], [192,'메리 메리 크리스마스'], 
            [194.1,'잘 지내는거지'], [197,'눈이 내리면 멍든 가슴이'], [200,'모두 하얗게 다 덮여지게 될까','face'], 
            [202.8,'눈물인지 눈 때문인지'], [206,'점점 너 멀리 멀리 보이던'],[208,'그 크리스마스'], [210,' ']],
            
            v1 : [[15, '전주 중'], [18, '첫눈 오는 이런 오후에'], [22, '너에게 전화를 걸수만'], [27, '있다면 기쁠텐데','top'], 
            [30, '벌써 일년이 지났는데'], [33.8, '난 아직 미련 가득해서'], [38, '쓸쓸해 어느새 혼잣말~','bottom'], 
            [39.2, '시계를 되돌려'], [41, '1년 전으로 갈수 있다면'],[42, '마음을 되돌려'], [44, '지금 우린 달라졌을까'], 
            [46.8, 'yeah 바보같은 소리지'], [49, '그래도 만약~','shoes'],[52,'너를 만나면 눈물 차올라'], 
            [55,'바보같은 난 아무 말 못해'], [58.8,'말해줘 메리 메리 크리스마스'], [61,'안녕 잘 지내는거지','face'], 
            [63.8,'눈이 내리면 멍든 가슴이'], [67,'모두 하얗게 다 덮여지게 될까'], [69.8,'미안해 잘해주지 못해'], 
            [72.8,'후회만 가득 가득했던'],[75,'그 크리스마스'], [79,' ']]
        }
    }
  
}

const comments = [];