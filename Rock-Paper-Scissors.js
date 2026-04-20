let userScore=0,compScore=0;
            const choices=['rock','paper','scissors'];
            function play(user)
            {
                const comp=choices[Math.floor(Math.random()*3)];
                let result = 'Draw!';
                if((user==='rock'&&comp==='scissors')||(user==='paper'&&comp==='rock')||(user==='scissors'&&comp==='paper')){result='You Win!';
                    userScore++;
                }
                else if(user!== comp){result='Computer Wins!';
                    compScore++;
                }
                document.getElementById('result').textContent=result+' (You: '+user+', Computer: '+comp+')';
                document.getElementById('userScore').textContent=userScore;
                document.getElementById('compScore').textContent=compScore;
            }