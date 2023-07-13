<template>
<table class="team">
  <thead>
    <tr>
      <td v-for="item in thead">
        <div class="flex">
          <p>{{ item }}</p>
          <div class="sort">
            <IconTopSort/>
            <IconTopSort/>
          </div>
        </div>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in tbody">
      <td><p>{{ item.team }}</p></td>
      <td><p>{{ item.leader }}</p></td>
      <td><p>{{ item.game }}</p></td>
      <td><p>{{ item.date }}</p></td>
      <td><p>edit</p></td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
import IconTopSort from '@/assets/icons/table/TopSort.vue'
const thead = ['Team', 'Leader', 'Main Game', 'Creation Date', '']
const tbody = [
  {
    team: 'Xpomba',
    leader: 'Jack003',
    game: 'StarCraft II',
    date: '07/21/17',
  },
  {
    team: 'Krasnoludy777',
    leader: 'Jack003',
    game: 'CS:GO',
    date: '07/16/17',
  },
  {
    team: 'Team Virus PRO ',
    leader: 'Jack003',
    game: 'Main News',
    date: '12/30/19',
  },
  {
    team: 'Team G2B',
    leader: 'Jack003',
    game: 'Fifa 2020',
    date: '02/08/13',
  },
  {
    team: 'TEAM Blacer',
    leader: 'Jack003',
    game: 'Valorant',
    date: '08/10/12',
  },
  {
    team: 'Drużyna pierścienia',
    leader: 'Jack003',
    game: 'Greenland',
    date: '05/16/18',
  },
  {
    team: 'NoobTeam87',
    leader: 'Jack003',
    game: 'Spain',
    date: '01/26/13',
  },
  {
    team: 'PowerRengers',
    leader: 'Jack003',
    game: 'Niue',
    date: '08/16/18',
  },
  {
    team: 'Edward Gaming',
    leader: 'Jack003',
    game: 'Guam',
    date: '06/29/16',
  },
  {
    team: '尼茲奇西爾',
    leader: 'Jack003',
    game: 'Costa Rica',
    date: '12/25/15',
  },
]

</script>

<style lang="scss">
@import '@/assets/scss/media-breakpoints.scss';
.team{
  margin-top: 23px;
  width: 100%;
  border-collapse: collapse;
  @include media-breakpoint-down(sm) {
    min-width: 700px;
  }
  thead{
    tr{
      td{
        border-top: 2px solid #20252B;
        border-bottom: 2px solid #20252B;
        padding-top: 20px;
        padding-bottom: 18px;
        .flex{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          p{
            color: #E6E6E6;
            font-size: 22px;
            font-style: normal;
            font-weight: 500;
            @include media-breakpoint-down(md) {
              font-size: 14px;
            }
          }
          .sort{
            svg:nth-child(2){
              transform: rotate(180deg);
            }
          }

        }
      }
      td:nth-child(1){
          border-left: 2px solid #20252B;
          width: 198px;
          @include media-breakpoint-down(lg) {
            width: auto;
            .flex{
              p{
                text-align: center;
              }
            }
          }
      }
      td:nth-child(2){
          width: 198px;
          .flex{
            padding-left: 60px;
          }
          @include media-breakpoint-down(lg) {
            width: auto;
            .flex{
              padding-left: 0;
              p{
                text-align: center;
              }
            }
          }
      }
      td:nth-child(3){
        .flex{
          padding-left: 25px;
        }
        @include media-breakpoint-down(lg) {
            width: auto;
            .flex{
              padding-left: 0;
              p{
                text-align: center;
              }
            }
          }
      }
      td:nth-child(4){
        .flex{
          transform: translateX(-5px);
        }
        @include media-breakpoint-down(lg) {
            width: auto;
            .flex{
              transform: none;
              p{
                text-align: center;
              }
            }
          }
      }
      td:nth-child(5){
          border-right: 2px solid #20252B;
          width: 260px;
          .sort{
            display: none;
          }
          @include media-breakpoint-down(lg) {
            width: auto;
            
          }
      }
    }
  }
  tbody{
    tr{
      td{
        padding-top: 23px;
        p{
          color: #67707A;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          @include media-breakpoint-down(md) {
              font-size: 14px;
            }
        }
      }
      td:nth-child(1){
          border-left: 2px solid #20252B;
          p{
            padding-left: 42px;
            @include media-breakpoint-down(lg) {
              padding-left: 0;
              text-align: center;
            }
          }
      }
      td:nth-child(2){
          p{
            padding-left: 75px;
            @include media-breakpoint-down(lg) {
              padding-left: 0;
              text-align: center;
            }
          }
      }
      td:nth-child(3){
          p{
            padding-left: 80px;
            @include media-breakpoint-down(lg) {
              padding-left: 0;
              text-align: center;
            }
          }
      }
      td:nth-child(4){
          p{
            padding-left: 75px;
            @include media-breakpoint-down(lg) {
              padding-left: 0;
              text-align: center;
            }
          }
      }
      td:nth-child(5){
        border-right: 2px solid #20252B;
          p{
            text-align: end;
            padding-right: 23px;
            font-size: 12px;
            transform: translateY(-1px);
          }
      }
    }
    tr:nth-child(10){
      td{
        border-bottom: 2px solid #20252B;
        padding-bottom: 25px;
      }
    }
    
  }
}
</style>