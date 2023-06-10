import { User } from "@/types/user";
import { rest } from "msw";

const userList: User[] = [
  {
    userId: "1",
    userUuid: "a",
    userName: "Robin",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "2",
    userUuid: "b",
    userName: "Jack",
    userAge: "12",
    userPhoto:
      "https://wimg.mk.co.kr/news/cms/202304/14/news-p.v1.20230414.15e6ac6d76a84ab398281046dc858116_P1.jpg",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },

  {
    userId: "3",
    userUuid: "c",
    userName: "Sam",
    userAge: "12",
    userPhoto: "https://img.wkorea.com/w/2020/10/style_5f8e43415d25f.jpg",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "1",
    userUuid: "a",
    userName: "Robin",
    userAge: "12",
    userPhoto:
      "https://img.etnews.com/news/article/2022/10/20/cms_temp_stats_16662400362146974444.jpg",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "2",
    userUuid: "b",
    userName: "Jack",
    userAge: "12",
    userPhoto:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaGhgYGhgaGhgYGhoaHBgZGhgYGBgcIS4lHB4rIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISGjQhISE0NDQ0MTQ0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0MTQ0MT80Mf/AABEIAQQAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEMQAAIBAgMECAMEBwYHAQAAAAECAAMRBCExBRJBUQYiYXGBkaGxwdHwEzJi4QcjQlJykqIkM4KywvEUFRZTY6PSNP/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EACIRAQEAAgIDAQEAAwEAAAAAAAABAhEDIRIxMkEiE1FhBP/aAAwDAQACEQMRAD8AMcTlo8iK0856KFxDMOOovcIO6wrDfcXumUKbpbtD7LDtY9Z+ovj963h8J5hfOanpzit6oicFXePexNvQHzmVXS/OdfFjrFy8l3kTGJjOHWcbUDxlk09PLOcc5gcrk+w+uyNDTiHO8GaTKJwDjOb2R7fjOg/XdDbXVTWcannENbfWYEnUXPfeAC7ucaUkw18ZxWvlBjm5pJFGkk3erIHfSA0kTTukDmPL2MZUgIiYzfdFcRv0FB1QlPLMehEwE13Qer/eL/C3uJHln8q8fWTS1FkOyl6rnnUf3t8ITU0kWx/7snm9T/O05vx0it2dnbxTNjQkxXiactBpraQnDDqA9/uZCyxVa4TDs5/YV28iTDW2PK+k+K38RUYHLe3R3IAg/wAt5XBpFiHJOeup7+McBO6TUkcdu6fOIdT4ToyE4NBGYcY5YxTqeUcmkAcTJd3IfWshUZ+IHxkrN8fyit0ahzP1z+UKTVuxT56fOC0TmO8nyt+cJQ9Qnnn4C/5+UG6CB8/rvnKeo+uEj3rmOojrDtJ9oxVha9O/d7ZyuqmW6j9R33Pkl5U4j5e0WGscR50tfyjKRzM6sCuCaToaf1zDmh9xM2JoOiA/tH+Bj6qPjMz+afD6jb1tIzZQ/Ur27x83Jna4sDHbJT9RT/gU+YvOP8dSaKdtFMaKnQY0CdgDjKjpPiNzA1BxY7nm4v6XlwRlMp02qH/hlHA1Tf8AluPjGxm8oTK6xobYXQenXw4rPUYO43lC2CqP2b3GZmVx+znoOyPmVOvMcD+U2/RvFO64VUYgBCrjh1Oqbjw9ZSdOn/tG5b9gHLIZs3yl8csvKykyxx8ZYyjG575KwjFTOOU6yqBxXq959o62UZv3t2SQnKAdQX9T55RzL1WP1lr7+kaH9gIqjdXxgNmUvy84VXbdS3P8h8T5QfDJcgcyL9wzPtH417mw4ZQ/WhqY9pLQS7DsVj6H8ogllv4fP3hGFp33sv3F8C1z/l9YWiLDEm1MKONx5hR8ZT4lfvd4l1jR91e0eg3j6BfOU+JzB7TMxbkGpce6SKIqCXvJLZX+uMciECaToWn9oJ5IfV0+UzgT3mu6GU7M55lR4WY+8nyX+aph9Rp8cLI3YD7SXALalTH/AI0/yiD7WNqTn8LexhyLZVHJVHoJx306XN2KdtFMCWOURCSJNaTDKYnp29kRfxufRAPczbtp9c5hunn7PefUAn4SnF9J8nyJ/R3/AHTuf2DUF+8Uz8TKnpKpfEbxBzUKCPwk/wD1Lj9HoDYaqnE1GHjuoQPGx8oXjMBvoTaxpsAcuevwj26yrJjvCMZgtkvULBRpz75ytsSoDbdOp9BN50bwAVSeOsu6mFU8IXk1ROKWPJP+Uuuqny4ZfONxGBYAdU5gHTnPSNokUxfcLAchf0mWxO1mdgiI1zkF3bHzOgtHxztJlhIzJw7Dhw+YjK1MrDsfXdT1wBmRa5Jy8pxabuLlSygAllztc8RrH3U9RXoxGYjS1zeaXB7HDr1WGl+w9v5Tn/TL53I8OPYPC3nDyhvCqN7WUchc+P0ZZbNp9UMeLEjuAsT6j1hn/TFQ6cTmfl6+ktk2GyWuMhl3X1HlbOLco2Y1nMbW6zHkLf4mtl4CVVd+E0uI2C5zv227TqfrsmfxOEIPieN+PZGxsZlKiptlYR9VsvSFYfAXIW4uSB3cz2wnauziiKSLBjl3axtl1dK2kuk2PRBeoW/EP8zD5THMbZTd9DqP6i54kEebfKS5fk3F9DttNek45i3nlLMys2wvUtzdB5uolm85r6dJu7FFeKY1IsmQSFBnCFEA6wymG6ffdT+In0m8AmE/SAuSd7fED2Mfi+onn80H+jzGWqVKJNt9Q6/xKet4lT/TN7jLkZC4K58wwGXnp5Tx/YeM+xxFOrYsEcMVBALDRhc5ZgmevUaqVFarTJ+zqEsqkjIZagaG4OXDThKcuOrtnDlueKDo+96d+0jyNpbyp2Mu6HHDfJHcbH4y0Ejfboxm4iqUwy9ZfA2MpsVsZSd5bA637ZoN2MejfsjY3QyxYPamx2LBrkG9+VydTxGds4ZgN2khG4XYi2VrAcAJpnwrcwZAcAx1t4SvnUbhjtlsFf7XJGRWBJBGQbsPb9ay8w1ItLOjs+2sMo4YDhEyyNJpBQwlhBNondyl+i5Slx9PeJmRtjE7VxztvKhAANj8+3PKZ/CYF3cA9a5tu9a97nLMD05zdV9kpxQX52943C7OKHeQgHnbMfKVmUkRywtqn6QbFFDcaiWDnWne6kC19dPOUG3ce7MisN3cQdXkWzPjYCb04Qs++7bx87ZcDPPOlGeKcct0f0gx8ct0mePjir6bEmer9GqNqCXH7K/n63nlNEZz2XZlPdpILWsqj+gH3ic16g4fdA7VT7g51KfowPwllaB49evRH/kHorH4Q99ZzV0z2htFHxQbo6lrCkWDUlzhiwYbMN+kPRO0k+Qb5zeTE/pFTqU+wn1DR+L6iefzXnVI2bxEsjtOtTFqdR0VsyAcjca259srF18veTYk9Udw+U7NOWXT03oRiC+HBJuQd0k5k2yz8LTUrMD+jjEXSqnJlcf4hb/TN6hnJnNZV38N3jBAWd3YkMeIqtM3JzcjyYNVxAE1OxPuxpMEWsTHo9zNZoeukqq33jLRNJVYhutBqUUgRIXwghNA3EkdYMkVT0bCeR7eqb2IrEfvFf5QF+E9ix7hUYnQAnyniLOWYsdWJJ7ySfjLcX7Uf/RepE+ETPy957Ls8XpLfX5f7Tx3D5Z9o9M57NspbUU/hHzMXm/CcP6Bxi3r0B+Nj5I3zhtQQbE//ppDkKh9FHxhbic9dED2ikl4oGdpawoQZNYWgmUhATIfpFp/q0PG/wATNoqTKdP0vRJ5WP8AWo/1R8PqFy+a8pGpktT7v1zkTZHxkyi6kfXCdzkXfQbG/Z4lQTk4KHvyZfYjxnq6NPBqVQqQymxBBB5EG4PnPZNhbTFeijjIkZjkwyYeYnPzY97dPDl1peJUkgqwDfgeLx27kBcyWnRclliMVaAl75ymTaYZwjncY6BtG/hOh7pfUaWU3Wi7TULWjrgGV9ZCNCYKapB1M3Q20SVhbWV2INzK44k6XkiMQLm8NC1aYY2hJbKUWH2iL2kmO2qqIWZgFAuSYaZ5SKvp3tIU8Oyg9Z+qP8X3j4Lf0nltEQ7b+2GxNXeOSi4VeQ4k9p+UEQZCdOOPji4+TPyy2IXQePwHzns2yP7lO74kTxsDNe6exbBa+HpnhuD2B+JHhI834pw/qFxfEp2U3PmyCHNnA1scSeyl7v8AlDiJz10Boo+0UAbT1hgEHRM4XvQrDkXvlL0wob2Gq8bUnb+V6bX77Xl3TMB24gajWHPD4gf0X/0zcfcZl6eF1+EkQ5nw9M5zEDOJJ3RyBnynpHQokUEtyJ/qPznnFf68hPTei6btGl/CL+IEnyfJ+L6aHevIXw+8wMmqJbMePzktBxIOpXYvZSOu6yj5QJKNSkLI7ZcCeHYT8ZpHS+kBxNL/AHjSmxsl7Uz7XdTuuCD+IW9dJ2rjlIuQb8vjJXWxO9e1rfvL/KcoAcDSBvur/Vby0jdL+MsO/wCZAHIXPK/wk9PFPUuLbijXn3dkiRL5IABzAsB3czJMTiEoUyzGwAuTxJ+JMzX+kOW44+jcXiUooXYgAcfgBxMwO2ttPiGz6qD7q/E8z7SLbG1nrvvNko+6vAdp5mV6iXxx04M87l1PSRFhKDSQqsIA0jFgkjrqLcFnrfRkhsNT0HUHj1mPsRPI3++O8T1fojU3sMnYCLeN5Dm9L8Xs+in9pqdlNB5u8PtA8NniKx/DTHox+MNInNV4itFOW7YoNSrCCt4LTOcNDQBqZQfbAH2b8bpVW3ehhSuIzaS3UDnvj/1vCe2X08Iqrpfx8MpEhy84Vjhuu41sz+8Ew5BdFa+6WUG2tiQDbttedsclT4fZztuncuGyHWAI061r8ufynqOAobqAchM7Q2WiVaYVGGZJDEkoV31APAkhQ3dbtmvorI55bXwx0IUXUd0GORy8oTQORHKQ1xEUFYaqCJM9MGU32pU3EKpbQHHKbobLE4G+kCOzuYEs/wDjBBMTtFQNZsb5aQVFVFvkJ5l0l2wa77qn9Wp6v4jxY/CaHpJtNnUqMl48z39kw7LmZXjn65eXL8MtH01nCJNRWVSSIsmQXI8JGoklPXwv5QCQm7iep9C33qKjstyzAHwv5GeV/teM9G6C1/1duRW3sQP5ryPLP5V4r2u8KP1tc/jQf+tT/qhjwPBC74gj/uD0ppCZy10xFFFFDTUiLDAe+ArDKW82is3cpPtBhpIvOVLEqc82YeG44P12Qyls6o37Nv4rD019INtVPswqhgXvfIZKLEG99dTN8aNx4vtLAVHxNSnTUs2+b8gL6seAmn2B0XFIh2INQXIY33VNj90DPx1mpoYVVvYC5NyeJPMyUJ2X7JXLO2aic45O6ymJ6mJBLlzdhe2QFzlnpb4zS4R7gSh23hX32fdAS6E2yszA2DDnm2f4ed5YbNq5CLPRluMm743FLlGs+nfH4smwsLg3ub2tlllxgZXKLzoSKgc5I8ZgZxAcTa0Le8HagWyFr2JzIGgvx48B2mELWW2kl79n0BMuRPRsXQSlRL1gSzghAOI3QS4JGRubc8r8BPO2EtxociMCEouUYiyc5SiZoEkTX0jI+n8oAlOd56V+joo67jAXsQNQbg72t+PwnmYM1vQzaIpvY3/ZItr1A1gO85eMXKbh8b29aGwEBYozKXYsbneFyAMuNshxg77Ge2RU99x8DLOltBWQMtrEAjuIuIn2gPf3kLjivMslP/yKrzT+Zv8A5nZY/wDHGci+Mbuq+hQSk1nIdhwF90Hx+9LQbUEqsXRG8TBnNph9RfPtSykzJ4t3dy5NyfoCG1X6thB1EBqQGuJsbGSrXXnJ2pA8JC2DBgFXtShlvLuhTYseZCtfPhmxAvl6wbZ72Nj9dsu0wi/dYixBUCw0szXvzvlnzlc+Cbf+8CSxtchQRnkL8d640A7YSl6HPmMoQz3TwgtNeqCITQXIiBgGGS7Qp6eUmo0LGPewtc6mw7TyHObtmlU9Fzkq5nTh7w+lsxEUPWaxGYXUtbQboOYNtL6Zw16X2SF2uSQxH3bLYC/bl28T4SpdDWdWQkLu2Y3OYvexFtSb5g6d+Sy20t/4y/SbFVcQwLKAE6th90EZdXIePlwmHfXxnr2PwI3SLAAC3Ze08kxC9dh+I+5nTx1HkjtNZI4iQaxNwlEjY5TrGzo0gHIXgK+4wbkR+cEadQzKI9V6M7SJp7l/u9UX5DT0tNHTe88+6MYmx70XzGQ9j5za0K+V5DL26cb0O3TznYJ9s/ANbhOTNUbh1SqSZG0UgxeKCLcgknIKNSePgNbxFkrGdWCpiVYDdN7ydqoUZnw4mAPIlbj9u0KDBXfrH9kAsQP3mA0HbJK1ZnGR3eH5kzGv0adnZqzqEvc2JLv2ntPkORjYzG+yZbk6jeM4OYsdCD7GcwqKzCm/3DZd7L/CLW5i/gJTYascgMgAAByAyAlxSUMtjFuJvwn2TUVmCC4B0yBza3iM9e3lnI8PWByuJcYKqiJbeJfJVuc969lItwHEmwsJIuzUCKq08+IFiN7eF7Nwvc55XNu2PMOuql/ksvau3hCMBTZutpcGy9Ui377HPID3831tkgg7u8DckXyG6La3452tzlNtPaBPUUWJ6ivTORVcmBOdje9xxi5Y5RszmXQnE4x3Y0lIKDIuNX5g30zvJkQKABoIPgKARYQ0yTRvQTFtcHx9RYTyDaVLdrOOTHzOZnr9VMrdk8s6RU7Yl+8H0A+EtgjyToCvwjGOcfw8hI2Ossk4JIg9xI5Kv3fH4QYjaNDTpM4vGAaToziLOOVvrzGU3+HuchncgDxyHwnluxq264nqHRyoGen2Z/ygketpHKdrY5fy3tIBVCgZAADLgBYRRmXOKU2l2y1FS2njyHaTKXaj3YhOsdL8h8BLOpiCFCJkBqeJPEmDJR/MzlnT0PStwGGZTqST5CWi0hqxg+JxaJ8BKyviXf7xIH7vz+U32zY/EY1VyTP2gIDObmMp0ryxoqBD0zZ+Gw0PpvaANiiASo+cw2P6QV3Y9ZksbBKdib8A755/hF+6NMbl6JllJ7emugIlls194bhIJAyADA2BFi50PfwtM/sKu70lZ1s26LjkbZiF1qjKQVOrKLcGF77pHEdkyZeNZlj5RoUXQAE9W4zuARY3AGii41t92Uw2Ol6jKbK7F9zL9W4yZt0Zqxa1x2GA4nbb0q9n3WRhcWRg2fFcyCvUA4WHEwttsAr1Ab5lbhri/Ak9/pK+WNiHjltDhmIyOoyI5EZESdjIKIbU6kknvJuZK0k6ENXSeZdLUtXJ/eC/5mPxE9Lq8TPPumNPrq34QPEGUw9p5+meOg7/AK9pEZK/CMlkDTJWHV8/aRSVz1frtgxE0YNY9o2AS4Z7MDPRei2PCuCdAhPnu/nPNUmk2Pit1kPePAj8vWJlD43rT3KlUUgHmAfSdmBpbdZQByAHkLTkGLIgDWVOP2rbqJm31meQkOOrO/VWMwezbDra8bcT2mc+naioUmZr/ebnwHdyhBw1tc5Z06FhbQco2s6gZkDtOUNjSKhR7IT9nlKnE7cRMk6558POBfaYitxKL2ZeusNBaYjF06eRYE8hmfKBYKkGfeRFS9+sQC+etv3ZC2zQiMy2Z7Eje0vbK8ya/bV3uu+7qfvtdUpn8K6Lbtz7I+OO57Tyur6et4WmFUATmIOaDmwHDK+vA8Ljx1jcBvbo3tbR1c2KHk6nyP0JKnVCUB9vumx0Jt42HfL5KQA0lQVtWL5WJz0Gbbx0v9XEtleGPphGQmSM0hc6xoKgxBy+u+Y3pZQuiN2lfM6+hmwxHyHh9CZvpMB9iL8CLeFj8DHw9kznTC1mzMjjnOcaZ0OYo5tIwRxMGONGRx0nIAgJbbKa5F+GXnpKtBLDY/3908be8VsbNKVwDbUA6iKCbnYvrOw1DNTSwotc5RzuqC7GwkWJxRUZC5lNUwD1mvUchf3V4zndjuO2+WO5RUsezODpsp261Zzc8Bw8ZdYbBIg3UUD3PedTJWpk6zNgFhdnU00QX5nM+sOKeAgWL2mlLInef91cz48pWNialU5ncX91dT3nUw1sbkWNfEKDujrNyHx5QnA4M6tbnujT85BgMOijKXFOHoJ0kb2JQE2G+tzyFxcxFo0VFDKWUuLiyji37PrM9lt1FZiahNYj9kHI9axAuA1ibae8sqTzu3GUhCq2tUIvYi4seB8/HyioNNuPj0XHLcEAyOsflO3jKhyhD0NVbP675mOlFTqW5m/15+k0NQ+9vKY/pTWzt2D0v8zHw9p53+WWvGkzs4Z0OZ0RNFeIwYRnBOmIQCWkJLhqm6475HQORic5wa3CVFsOudBxPzilfhsUNxbnPdF9OUUXs7aLQJktOlYZyTEYpUW5Myu1do1XbdW6g8Fvc95nNJt13pb7R23SpZX325D4nhM3jNsVquQO4vJdfFtYVhdjMw64sPWWmF2bTTRc+ZzjdQvdUuztls2ZFhzMl267UUAp3DE2LDNrW4a28AZonIUcpXMn2j6EKOPPu5Q32LOlX0Uw1YF2e+4bWUkk3zuSSSfXymvQRmGohQLSZhMyuxjNQwtIy7BlKEBrixIuATkCR4x1SDVTcWMyCrHpBvbi3ZT1wbA3y3bBh+WXWgVI5SfGNTakoTfyK23zoASoW3DK2n+0C6R8u6nh1E6GNcTqHKRV2yMSRS0K5sAe4zBdJ6t6hHK3mRc+83eJOQ+tJ5vtarvO55sfIZSuE7R5L0r4uMQilkCiiMQgHWM4TE5yjSYBPh4nMbQaJznBqUVu0+cUH34oN29UqjeOecLoIF0AEUU5K7zjGrxiihGVBR65O9nDaKCKKU/Eb7FhBGtFFFbEbSLcF4ooCivtCaZU6C2X8sFiijUkP4SKrp5e4iimQwHGnLwM8wxWp7z7mKKVwS5ECTkUUdJ2JYopocfSNMUUAfSjniimX2IZFFFBr//Z",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },

  {
    userId: "3",
    userUuid: "c",
    userName: "Sam",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEsvikVznea_PpEwu3izTgoIGB-lrfDe1uA&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "1",
    userUuid: "a",
    userName: "Robin",
    userAge: "12",
    userPhoto:
      "data:image/jpeg;base64,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",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "2",
    userUuid: "b",
    userName: "Jack",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },

  {
    userId: "3",
    userUuid: "c",
    userName: "Sam",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "1",
    userUuid: "a",
    userName: "Robin",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "2",
    userUuid: "b",
    userName: "Jack",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },

  {
    userId: "3",
    userUuid: "c",
    userName: "Sam",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "1",
    userUuid: "a",
    userName: "Robin",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
  {
    userId: "2",
    userUuid: "b",
    userName: "Jack",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },

  {
    userId: "3",
    userUuid: "c",
    userName: "Sam",
    userAge: "12",
    userPhoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCtlzKHxMi3LafGUPrj2JakBXUfyx2gdcBIg&usqp=CAU",
    userAddress: "a",
    userSbd: "23",
    userDetailInfo: [
      {
        userGym: "Hello Gym",
        Monday: "Arm",
        Tuesday: "Arm",
        Wednesday: "Arm",
        Thursday: "Arm",
        Friday: "Arm",
        Saturday: "Arm",
        Sunday: "Arm",
      },
    ],
  },
];

export const handlers = [
  // rest.get("/interview/questions", (_req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(questions));
  // }),
  // rest.post("/interview/questions", (_req, res, ctx) => {
  //   return res(ctx.status(201), ctx.json(questions));
  // }),
  rest.get("/users/matchings", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userList));
  }),
  // rest.patch("/matching", (req, res, ctx) => {
  //   //const n = req.url.searchParams.get("name");
  //   const id = req.params;
  //   return res(ctx.status(201), ctx.json(userList));
  // }),
  rest.post("/users/:userUuid/likes/", (req, res, ctx) => {
    //const userUuid = ;
    return res(ctx.status(201));
  }),
];
