<template>
  <main class="main new-entry" @click="closeSelect">
    <div class="container">
      <div class="new-entry__title">New/Edit {{ title }}</div>

      <TheAccordion v-if="title === 'Player'" title="Basic info" :is-active="playerInfo" @open="playerInfo = !playerInfo">
        <div class="new-entry__form">
          <BaseInput
              label="Full name"
              placeholder="Full name"
              v-model="formData.userName"
          />

          <BaseInput
              label="ID"
              placeholder="ID"
              v-model="formData.userId"
          />

          <BaseSelect
              label="Gender"
              v-model="formData.userGender"
              :options="genders"
              placeholder="Select gender"
              :active="selectGender"
              @click="selectGender = !selectGender"
          />

          <BaseInput
              label="Age"
              placeholder="Age"
              v-model="formData.userAge"
          />

          <BaseSelect
              label="Country"
              v-model="formData.userCountry"
              :options="countries"
              placeholder="Select country"
              :active="selectCountry"
              has-search
              @click="selectCountry = !selectCountry"
          />

          <BaseInput
              label="Nationality"
              placeholder="Nationality"
              v-model="formData.userNationality"
          />

          <BaseInput
              label="Web-site"
              placeholder="Web-site"
              v-model="formData.userWebsite"
          />

          <p class="new-entry__form-label">URL</p>

          <div class="new-entry__form-wrapper">
            <div class="new-entry__form-link">doit.gg/user</div>

            <input class="new-entry__form-input" v-model="formData.userUrl" />
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-else-if="title === 'Team'" title="Basic info" :is-active="teamInfo" @open="teamInfo = !teamInfo">
        <div class="new-entry__form">
          <BaseInput
              label="Team name"
              placeholder="Team name"
              v-model="formData.teamName"
          />

          <BaseInput
              label="ID"
              placeholder="ID"
              v-model="formData.teamId"
          />

          <BaseSelect
              label="Game"
              v-model="formData.teamGame"
              :options="games"
              placeholder="Select game"
              :active="selectGame"
              @click="selectGame = !selectGame"
          />

          <BaseInput
              label="Team leader"
              placeholder="Team leader"
              v-model="formData.teamLeader"
          />

          <BaseSelect
              label="Country"
              v-model="formData.teamCountry"
              :options="countries"
              placeholder="Select country"
              :active="selectCountry"
              has-search
              @click="selectCountry = !selectCountry"
          />

          <BaseInput
              label="Web-site"
              placeholder="Web-site"
              v-model="formData.teamWebsite"
          />

          <p class="new-entry__form-label">URL</p>

          <div class="new-entry__form-wrapper">
            <div class="new-entry__form-link">doit.gg/team</div>

            <input class="new-entry__form-input" v-model="formData.teamUrl" />
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-else-if="title === 'Tournament'" title="Basic info" :is-active="tournamentInfo" @open="tournamentInfo = !tournamentInfo">
        <div class="new-entry__form">
          <BaseInput
              label="Host"
              placeholder="Host"
              v-model="formData.tournamentHost"
          />

          <BaseInput
              label="Tournament name"
              placeholder="Tournament name"
              v-model="formData.tournamentName"
          />

          <p class="new-entry__form-label">URL</p>

          <div class="new-entry__form-wrapper">
            <div class="new-entry__form-link">doit.gg/</div>

            <input class="new-entry__form-input" v-model="formData.tournamentUrl" />
          </div>

          <p class="new-entry__form-label">Quick Rules</p>

          <textarea class="new-entry__form-textarea" />
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="GAME INFO" :is-active="tournamentGame" @open="tournamentGame = !tournamentGame">
        <div class="new-entry__form">
          <BaseSelect
              label="Game"
              v-model="formData.tournamentGame"
              :options="games"
              placeholder="Select game"
              :active="selectGame"
              @click="selectGame = !selectGame"
          />
          <div class="new-entry__form-type" style="margin-top: 9px; margin-bottom: 15px;">
            <h5>Type</h5>
            <BaseRadio v-for="(item, index) in inputText" :text="item.text" :state="item.state" @click="updateStateInputText(index)" style="margin-top: 12px;"/>
          </div>
          <BaseSelect
              label="Format*"
              v-model="formData.tournamentGame"
              :options="games"
              placeholder="Select game"
              :active="selectGameTWO"
              @click="selectGameTWO = !selectGameTWO"
          />
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">Include a match for 3rd place</h5>
          </div>
          <div class="new-entry__form-mode" style="display: flex; justify-content: space-between; margin-top: 13px;">
            <div class="one" style="width: 108px;">
              <BaseSelect
              label="Mode*"
              v-model="formData.tournamentGame"
              :options="mode"
              placeholder="Select game"
              :active="selectMode"
              @click="selectMode = !selectMode"
              />
            </div>
            <div class="two" style="width: 276px;">
              <BaseSelect
              label="Map voting system"
              v-model="formData.tournamentGame"
              :options="games"
              placeholder="Select game"
              :active="selectMap"
              @click="selectMap = !selectMap"
              />
            </div>
          </div>
          <div class="new-entry__form-inp">
            <CompInput :title="'Main Banner 370x200*'"/>
            <CompInput style="margin-top: 19px;" :title="'Torunamnet background min 2000 x 3000'"/>
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="REGISTRATION" :is-active="tournamentRegistration" @open="tournamentRegistration = !tournamentRegistration">
        <div class="new-entry__form">
          <div class="new-entry__form-btn">
            <BTNform/>
          </div>
          <div class="new-entry__form-timer" style="margin-top: 30px;">
            <Timerform :title="'Start time*'"/>
            <Timerform :title="'Estimated end*'" style="margin-top: 21px;"/>
          </div>
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">Checkin Time</h5>
          </div>
          <div class="new-entry__form-min">
            <BaseSelect
              :options="minutes"
              placeholder="Select game"
              :active="selectMituntes"
              @click="selectMituntes = !selectMituntes"
              style="width: 160px"
            />
          </div>
          <h6 style="font-size: 16px; color: #3C434D; margin-top: 30px; font-weight: 400;">(GMT -05:00) Eastern time — set the time zone from your <span style="color: #2281F2;">settings</span> </h6>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="if Paid" :is-active="tournamentPaid" @open="tournamentPaid = !tournamentPaid">
        <div class="new-entry__form">
          <div class="new-entry__form-if" style="display: flex; align-items: center; gap: 20px">
            <p>Register cost</p>
            <BaseInput style="margin: 0;"/>
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="Player list" :is-active="tournamentPlayers" @open="tournamentPlayers = !tournamentPlayers">
        <div class="new-entry__form">
          <div class="new-entry__form-btn-block" style="display: flex; gap: 19px">
            <button class="btn-block-exponsive">List of players</button>
            <button class="btn-block-exponsive">Edit list of players</button>
          </div>
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center; margin-top: 30px;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">Don’t show tournamnet on website</h5>
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="Leagues" :is-active="tournamentLeagues" @open="tournamentLeagues = !tournamentLeagues">
        <div class="new-entry__form">
          <div class="new-entry__form-top-info" style="display: flex; align-items: center; gap: 25px">
            <p>Connect tournament with league</p>
            <button class="btn-block-exponsive">Choose League</button>
          </div>
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center; margin-top: 30px;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">Only League System</h5>
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="Prize pool" :is-active="tournamentPrize" @open="tournamentPrize = !tournamentPrize">
        <div class="new-entry__form">
          <div class="new-entry__form-inp-top" style="display: flex; gap: 20px; flex-direction: column;" >
            <div class="one" style="display: flex; align-items: center; gap: 8px">
              <p style="color: #CCCDCD; font-weight: 700;">Prize pool</p>
              <BaseInput style="margin: 0;"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px">
              <p style="color: #CCCDCD; font-weight: 700;">MAX players/teams number:</p>
              <BaseInput style="margin: 0;"/>
            </div>
          </div>
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center; margin-top: 30px;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">3rd place turn on?</h5>
          </div>
          <div class="new-entry__form-typed" style="display: flex; justify-content: space-between;">
            <div class="block" style="width: 250px;">
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">1st   place:</p>
              <BaseInput style="margin: 0; width: 140px"/>
              </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">2st   place:</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">3st   place:</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px; margin-bottom: 40px;">
              <p style="color: #CCCDCD; font-weight: 700;">4st   place:</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <BaseRadio v-for="(item, index) in typeText" :text="item.text" :state="item.state" @click="updateStateTypeText(index)" style="margin-top: 12px;"/>
            </div>
            <div class="block" style="width: 250px;">
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro8</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro16</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro32</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro64</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro128</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro256</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <div class="one" style="display: flex; align-items: center; gap: 8px;  margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Ro512</p>
              <BaseInput style="margin: 0; width: 140px"/>
            </div>
            <BaseRadio v-for="(item, index) in typeSelect" :text="item.text" :state="item.state" @click="updateStateSelectText(index)" style="margin-top: 12px;"/>
            </div>
          </div>
          <!-- <div class="new-entry__form-chsd">
            <BaseRadio v-for="(item, index) in typeText" :text="item.text" :state="item.state" @click="updateStateTypeText(index)" style="margin-top: 12px;"/>
          </div> -->
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="VOTING" :is-active="tournamentVoting" @open="tournamentVoting = !tournamentVoting">
        <div class="new-entry__form">
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center; margin-top: 10px;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">Allow registred users in tournamnet to provide scores for every match</h5>
          </div>
          <div class="new-entry__form-chck" style="display: flex; gap: 8px; align-items: center; margin-top: 30px;">
            <BaseCheckbox/>
            <h5 style="color: #CCCDCD; font-size: 16px; font-weight: 400;">Allow regsitred users only in their match to provide scores</h5>
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="Additional requirements" :is-active="tournamentAdditional" @open="tournamentAdditional = !tournamentAdditional">
        <div class="new-entry__form">
          <div class="new-entry__form-flex" style="display: flex; justify-content: space-between;">
            <div class="block">
              <div class="one" style="display: flex; gap: 8px; align-items: center;">
                <BaseCheckbox/>
                <p style="color: #CCCDCD;  font-weight: 400;">PSN Account</p>
              </div>
              <div class="one" style="display: flex; gap: 8px; align-items: center; margin-top: 17px;">
                <BaseCheckbox/>
                <p style="color: #CCCDCD;  font-weight: 400;">Xbox Account</p>
              </div>
              <div class="one" style="display: flex; gap: 8px; align-items: center; margin-top: 17px;">
                <BaseCheckbox/>
                <p style="color: #CCCDCD;  font-weight: 400;">Steam Account</p>
              </div>
              <div class="one" style="display: flex; gap: 8px; align-items: center; margin-top: 17px;">
                <BaseCheckbox/>
                <p style="color: #CCCDCD;  font-weight: 400;">League of Legends Account</p>
              </div>
              <div class="one" style="display: flex; gap: 8px; align-items: center; margin-top: 17px;">
                <BaseCheckbox/>
                <p style="color: #CCCDCD;  font-weight: 400;">Blizzard Account</p>
              </div>
              <div class="one" style="display: flex; gap: 8px; align-items: center; margin-top: 17px;">
                <BaseCheckbox/>
                <p style="color: #CCCDCD;  font-weight: 400;">Steam Account</p>
              </div>
            </div>
            <div class="block" style="width: 260px;">
              <div class="one" style="display: flex; align-items: center; gap: 8px">
                <p>Country:</p>
                <button class="btn-block-exponsive">Choose country</button>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 10px;">
              <p style="color: #CCCDCD; font-weight: 700;">Min Age:</p>
              <BaseInput style="margin: 0; width: 140px"/>
              </div>
            </div>
          </div>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="Extra" :is-active="tournamentExtra" @open="tournamentExtra = !tournamentExtra">
        <div class="new-entry__form">
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Lobby</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Mode</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px;">VETO</p>
            <BaseInput/>
          </div>
          <div class="flex-item" style="display: flex; justify-content: space-between;">
            <div class="flex">
              <h4 style="color: #F5F5F5; font-size: 24px;">Server region</h4>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">europe nordic & east </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">Europe West </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">Australia & Oceania </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">china </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">Asia </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">Amercia </p>
              </div>
              
            </div>
            <div class="flex">
              <h4 style="color: #F5F5F5; font-size: 24px;">Platform</h4>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">PC </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">Xbox one </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">ps4 </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">nintendo switch </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">PS5 </p>
              </div>
              <div class="one" style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                <BaseCheckbox/>
                <p style="text-transform: uppercase; color: #67707A; font-size: 16px;">Xbox Series X </p>
              </div>
              
            </div>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px; margin-top: 30px;">Discord URL</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px; margin-top: 30px;">Facebook URL</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px; margin-top: 30px;">Twitter URL</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px; margin-top: 30px;">VK URL</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px; margin-top: 30px;">Twitch URL</p>
            <BaseInput/>
          </div>
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px; margin-top: 30px;">Youtube URL</p>
            <BaseInput/>
          </div>
        </div>
      </TheAccordion>


      <TheAccordion v-if="title === 'Tournament'" title="Sponsors" :is-active="tournamentSponsors" @open="tournamentSponsors = !tournamentSponsors">
        <div class="new-entry__form">
          <div class="block">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Sponsor logo #1</p>
            <div class="info" style="display: flex;  justify-content: space-between;">
              <BaseInput
              placeholder="banner url" style="margin: 0; width: 339px;"/>
              <button style="color: var(--white-96, #F5F5F5); text-align: center; font-size: 10px; background: #1A222D; width: 157px;">UPLOAD</button>
            </div>
            
          </div>
          <div class="block" style="margin-top: 10px;">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Sponsor logo #2</p>
            <div class="info" style="display: flex;  justify-content: space-between;">
              <BaseInput
              placeholder="banner url" style="margin: 0; width: 339px;"/>
              <button style="color: var(--white-96, #F5F5F5); text-align: center; font-size: 10px; background: #1A222D; width: 157px;">UPLOAD</button>
            </div>
            
          </div>
          <div class="block" style="margin-top: 10px;">
            <p style="color: #CCCDCD; font-size: 16px; font-weight: 700; margin-bottom: 12px;">Sponsor logo #3</p>
            <div class="info" style="display: flex;  justify-content: space-between;">
              <BaseInput
              placeholder="banner url" style="margin: 0; width: 339px;"/>
              <button style="color: var(--white-96, #F5F5F5); text-align: center; font-size: 10px; background: #1A222D; width: 157px;">UPLOAD</button>
            </div>
            
          </div>
          <button style="color: var(--white-96, #F5F5F5); text-align: center; font-size: 16px; font-weight: 700; display: block; margin: 0 auto; width: 187px; background: #1A222D; margin-top: 35px; padding: 16px 0px;">+ Add Sponsor </button>
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Tournament'" title="Rules" :is-active="tournamentRules" @open="tournamentRules = !tournamentRules">
        <div class="new-entry__form">
          <p class="new-entry__form-label">Rules</p>
          <textarea class="new-entry__form-textarea" />
        </div>
      </TheAccordion>

      <TheAccordion v-else-if="title === 'Team'" title="Players" :is-active="teamPlayers" @open="teamPlayers = !teamPlayers">
        <div class="new-entry__form">
          
        </div>
      </TheAccordion>

      <TheAccordion v-if="title === 'Player'" title="Advanced" :is-active="playerAdvanced" @open="playerAdvanced = !playerAdvanced">
        <div class="new-entry__form">

        </div>
      </TheAccordion>

      <TheAccordion v-else-if="title === 'Team'" title="Advanced" :is-active="teamAdvanced" @open="teamAdvanced = !teamAdvanced">
        <div class="new-entry__form">
    
        </div>
      </TheAccordion>
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TheAccordion from '@/components/TheAccordion.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseSelect from '@/components/UI/BaseSelect.vue'
import BaseRadio from '@/components/UI/BaseRadio.vue'
import BaseCheckbox from '@/components/UI/BaseCheckbox.vue'
import CompInput from '@/components/Table/Form/Input.vue'
import BTNform from '@/components/Table/Form/Btn.vue'
import Timerform from '@/components/Table/Form/Timer.vue'
const route = useRoute()
const router = useRouter()

const entries = ['player', 'team', 'tournament']

onBeforeMount(async () => {
  let isValid = false
  await router.isReady()
  entries.forEach(entry => {
    if (isValid) {
      return
    }
    isValid = route.params.entry.toLowerCase() === entry;
  })
  if (!isValid) {
    await router.push('/table')
  }
})

const title = computed(() => {
  return route.params.entry.charAt(0).toUpperCase() + route.params.entry.slice(1)
})

const playerInfo = ref(false)
const playerAdvanced = ref(false)

const teamInfo = ref(false)
const teamPlayers = ref(false)
const teamAdvanced = ref(false)

const tournamentInfo = ref(false)
const tournamentGame = ref(false)
const tournamentRegistration = ref(false)
const tournamentPaid = ref(false)
const tournamentPlayers = ref(false)
const tournamentLeagues = ref(false)
const tournamentPrize = ref(false)
const tournamentVoting = ref(false)
const tournamentAdditional = ref(false)
const tournamentExtra = ref(false)
const tournamentStreams = ref(false)
const tournamentSponsors = ref(false)
const tournamentRules = ref(false)

const selectCountry = ref(false)
const selectGender = ref(false)
const selectGame = ref(false)
const selectGameTWO = ref(false)
const selectMode = ref(false);
const selectMap = ref(false);
const selectMituntes = ref(false);
const countries = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'AndorrA', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'},
  {name: 'Bulgaria', code: 'BG'},
  {name: 'Burkina Faso', code: 'BF'},
  {name: 'Burundi', code: 'BI'},
  {name: 'Cambodia', code: 'KH'},
  {name: 'Cameroon', code: 'CM'},
  {name: 'Canada', code: 'CA'},
  {name: 'Cape Verde', code: 'CV'},
  {name: 'Cayman Islands', code: 'KY'},
  {name: 'Central African Republic', code: 'CF'},
  {name: 'Chad', code: 'TD'},
  {name: 'Chile', code: 'CL'},
  {name: 'China', code: 'CN'},
  {name: 'Christmas Island', code: 'CX'},
  {name: 'Cocos (Keeling) Islands', code: 'CC'},
  {name: 'Colombia', code: 'CO'},
  {name: 'Comoros', code: 'KM'},
  {name: 'Congo', code: 'CG'},
  {name: 'Congo, The Democratic Republic of the', code: 'CD'},
  {name: 'Cook Islands', code: 'CK'},
  {name: 'Costa Rica', code: 'CR'},
  {name: 'Cote D\'Ivoire', code: 'CI'},
  {name: 'Croatia', code: 'HR'},
  {name: 'Cuba', code: 'CU'},
  {name: 'Cyprus', code: 'CY'},
  {name: 'Czech Republic', code: 'CZ'},
  {name: 'Denmark', code: 'DK'},
  {name: 'Djibouti', code: 'DJ'},
  {name: 'Dominica', code: 'DM'},
  {name: 'Dominican Republic', code: 'DO'},
  {name: 'Ecuador', code: 'EC'},
  {name: 'Egypt', code: 'EG'},
  {name: 'El Salvador', code: 'SV'},
  {name: 'Equatorial Guinea', code: 'GQ'},
  {name: 'Eritrea', code: 'ER'},
  {name: 'Estonia', code: 'EE'},
  {name: 'Ethiopia', code: 'ET'},
  {name: 'Falkland Islands (Malvinas)', code: 'FK'},
  {name: 'Faroe Islands', code: 'FO'},
  {name: 'Fiji', code: 'FJ'},
  {name: 'Finland', code: 'FI'},
  {name: 'France', code: 'FR'},
  {name: 'French Guiana', code: 'GF'},
  {name: 'French Polynesia', code: 'PF'},
  {name: 'French Southern Territories', code: 'TF'},
  {name: 'Gabon', code: 'GA'},
  {name: 'Gambia', code: 'GM'},
  {name: 'Georgia', code: 'GE'},
  {name: 'Germany', code: 'DE'},
  {name: 'Ghana', code: 'GH'},
  {name: 'Gibraltar', code: 'GI'},
  {name: 'Greece', code: 'GR'},
  {name: 'Greenland', code: 'GL'},
  {name: 'Grenada', code: 'GD'},
  {name: 'Guadeloupe', code: 'GP'},
  {name: 'Guam', code: 'GU'},
  {name: 'Guatemala', code: 'GT'},
  {name: 'Guernsey', code: 'GG'},
  {name: 'Guinea', code: 'GN'},
  {name: 'Guinea-Bissau', code: 'GW'},
  {name: 'Guyana', code: 'GY'},
  {name: 'Haiti', code: 'HT'},
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
  {name: 'Holy See (Vatican City State)', code: 'VA'},
  {name: 'Honduras', code: 'HN'},
  {name: 'Hong Kong', code: 'HK'},
  {name: 'Hungary', code: 'HU'},
  {name: 'Iceland', code: 'IS'},
  {name: 'India', code: 'IN'},
  {name: 'Indonesia', code: 'ID'},
  {name: 'Iran, Islamic Republic Of', code: 'IR'},
  {name: 'Iraq', code: 'IQ'},
  {name: 'Ireland', code: 'IE'},
  {name: 'Isle of Man', code: 'IM'},
  {name: 'Israel', code: 'IL'},
  {name: 'Italy', code: 'IT'},
  {name: 'Jamaica', code: 'JM'},
  {name: 'Japan', code: 'JP'},
  {name: 'Jersey', code: 'JE'},
  {name: 'Jordan', code: 'JO'},
  {name: 'Kazakhstan', code: 'KZ'},
  {name: 'Kenya', code: 'KE'},
  {name: 'Kiribati', code: 'KI'},
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
  {name: 'Korea, Republic of', code: 'KR'},
  {name: 'Kuwait', code: 'KW'},
  {name: 'Kyrgyzstan', code: 'KG'},
  {name: 'Lao People\'S Democratic Republic', code: 'LA'},
  {name: 'Latvia', code: 'LV'},
  {name: 'Lebanon', code: 'LB'},
  {name: 'Lesotho', code: 'LS'},
  {name: 'Liberia', code: 'LR'},
  {name: 'Libyan Arab Jamahiriya', code: 'LY'},
  {name: 'Liechtenstein', code: 'LI'},
  {name: 'Lithuania', code: 'LT'},
  {name: 'Luxembourg', code: 'LU'},
  {name: 'Macao', code: 'MO'},
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
  {name: 'Madagascar', code: 'MG'},
  {name: 'Malawi', code: 'MW'},
  {name: 'Malaysia', code: 'MY'},
  {name: 'Maldives', code: 'MV'},
  {name: 'Mali', code: 'ML'},
  {name: 'Malta', code: 'MT'},
  {name: 'Marshall Islands', code: 'MH'},
  {name: 'Martinique', code: 'MQ'},
  {name: 'Mauritania', code: 'MR'},
  {name: 'Mauritius', code: 'MU'},
  {name: 'Mayotte', code: 'YT'},
  {name: 'Mexico', code: 'MX'},
  {name: 'Micronesia, Federated States of', code: 'FM'},
  {name: 'Moldova, Republic of', code: 'MD'},
  {name: 'Monaco', code: 'MC'},
  {name: 'Mongolia', code: 'MN'},
  {name: 'Montserrat', code: 'MS'},
  {name: 'Morocco', code: 'MA'},
  {name: 'Mozambique', code: 'MZ'},
  {name: 'Myanmar', code: 'MM'},
  {name: 'Namibia', code: 'NA'},
  {name: 'Nauru', code: 'NR'},
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'RWANDA', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, Province of China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States', code: 'US'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Viet Nam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'}
]
const genders = [
  {
    id: 0,
    name: 'Male'
  },
  {
    id: 1,
    name: 'Female'
  },
  {
    id: 2,
    name: 'Other'
  },
]
const games = [
  {
    id: 0,
    name: 'Dota ll'
  },
  {
    id: 1,
    name: 'CS:GO'
  },
  {
    id: 2,
    name: 'StarCraft ll'
  },
  {
    id: 3,
    name: 'WarCraft lll'
  },
  {
    id: 4,
    name: 'FIFA 2020'
  },
  {
    id: 5,
    name: 'Valorant'
  },
  {
    id: 6,
    name: 'BrawlStars'
  }
]
const inputText = ref([
  {
    id: 0,
    text: 'Single stage tournament' ,
    state: true,
  },
  {
    id: 0,
    text: 'Two stage tournament' ,
    state: true,
  }
])
function updateStateInputText(index) {
    inputText.value.forEach((item, i) => {
      if (i === index) {
        item.state = false;
      } else {
        item.state = true;
      }
    });
  }

const mode = [
  {
    name: '5v5',
  },
  {
    name: '4v4',
  },
  {
    name: '3v3',
  },
  {
    name: '2v2',
  },
  {
    name: '1v1',
  },
]
const typeText = ref([
  {
    id: 0,
    text: 'Money' ,
    state: true,
  },
  {
    id: 1,
    text: 'Thing' ,
    state: true,
  },
  {
    id: 2,
    text: 'Money + Thing' ,
    state: true,
  },
  {
    id: 3,
    text: 'Nothing' ,
    state: true,
  },
  {
    id: 4,
    text: 'Qualifers' ,
    state: true,
  }
])

const typeSelect = ref([
  {
    id: 0,
    text: 'Active' ,
    state: true,
  },
  {
    id: 1,
    text: 'No Active' ,
    state: true,
  },
])
function updateStateTypeText(index) {
  typeText.value.forEach((item, i) => {
      if (i === index) {
        item.state = false;
      } else {
        item.state = true;
      }
    });
  }
  function updateStateSelectText(index) {
    typeSelect.value.forEach((item, i) => {
      if (i === index) {
        item.state = false;
      } else {
        item.state = true;
      }
    });
  }
function closeSelect() {
  selectCountry.value = false
  selectGender.value = false
  selectGame.value = false
}
const minutes = [
  {
    id: 0,
    name: '30 minute',
  },
  {
    id: 1,
    name: '10 minute',
  },
  {
    id: 2,
    name: '20 minute',
  },
]

const formData = ref({
  userName: '',
  userId: '',
  userGender: '',
  userAge: '',
  userCountry: '',
  userNationality: '',
  userWebsite: '',
  userUrl: '',
  teamName: '',
  teamId: '',
  teamGame: '',
  teamLeader: '',
  teamCountry: '',
  teamWebsite: '',
  teamUrl: '',
  tournamentHost: '',
  tournamentName: '',
  tournamentUrl: '',
  tournamentRules: '',
  tournamentGame: ''
})

</script>

<style scoped lang="scss">
@import '@/assets/scss/media-breakpoints.scss';

.new-entry {

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__title {
    color: #0F1215;
    font-size: 22px;
    font-weight: 700;
    margin-top: 32px;
    line-height: 100%;
    text-align: center;
    margin-bottom: 30px;
    background: #D8DFEB;
    padding: 30px 208px;
    max-width: fit-content;
  }

  &__form {
    width: 100%;
    padding: 14px;
    margin-top: 30px;

    &-label {
      color: #CCCDCD;
      font-size: 16px;
      font-weight: 700;
      line-height: 100%;
      margin-bottom: 12px;
    }

    &-wrapper {
      display: flex;
      height: 40px;
      border-radius: 4px;
      border: 2px solid #20252B;
      background: #0F1215;
      margin-bottom: 22px;
    }

    &-link {
      background: #20252B;
      padding: 12px 10px 12px 12px;
      color: #78828F;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 80%;
    }

    &-input {
      background: none;
      outline: none;
      border: none;
      color: #CCCDCD;
      font-family: Rubik, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      padding-left: 9px;
    }

    &-textarea {
      width: 100%;
      resize: none;
      border-radius: 4px;
      padding: 12px 16px;
      border: 2px solid #20252B;
      background: #0F1215;
      aspect-ratio: 1 / 0.36;
      color: #CCCDCD;
      font-family: Rubik, sans-serif;
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>

<style>
.input-wrapper {
  margin-bottom: 22px;
}
.select-wrapper__label,
.input-wrapper__label {
  color: #CCCDCD;
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 12px;
}
.btn-block-exponsive{
  padding: 12px 22px;
  color: #0A61E1;
  background: #1A222D;
  font-weight: 700;
}
</style>
