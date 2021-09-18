import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import puzzleBack from '../assets/common/puzzle-back.svg';
import puzzleBegin from '../assets/common/puzzle-begin.svg';
import puzzleReplay from '../assets/common/puzzle-replay.svg';
import coin from '../assets/common/coin.svg';
import add15 from '../assets/common/puzzle-add-15.svg';
import puzzleUnlock from '../assets/common/puzzle-unlock.svg';
import puzzleBrain from '../assets/common/puzzle-confident.svg';
import puzzleHint from '../assets/common/puzzle-hint.svg';
import puzzleShare from '../assets/common/puzzle-share.svg';
import {styles} from './style/WordPuzzle';
import {BorderButton, EmojiButton} from '../components/Button';
import {PuzzleModal} from '../components/Modal';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

import TextTicker from 'react-native-text-ticker';

import {SideMenu} from '../SideMenu';

import {generateRandomString, getNextQuiz} from '../config/words';

const hintCost = 40,
  unlockCost = 100;

const WordPuzzleScreen = ({navigation}) => {
  const [startModalVisible, setStartModalVisible] = useState(true);

  const [hintModalVisible, setHintModalVisible] = useState(false);
  const [unlockModalVisible, setUnlockModalVisible] = useState(false);
  const [finishModalVisible, setFinishModalVisible] = useState(false);

  const [quiz, setQuiz] = useState(getNextQuiz);
  const [string, setString] = useState(generateRandomString(12, quiz.name));
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  const quizCount = 3;

  const startPuzzle = () => {
    setScore(0);
    let tempQuiz = getNextQuiz();
    setQuiz(tempQuiz);
    setString(generateRandomString(12, tempQuiz.name));
    setAnswer('');
  };

  const nextQuiz = tempScore => {
    let tempQuiz = getNextQuiz(quiz.id);
    // console.log(tempQuiz.id);
    if (tempQuiz.id == quizCount) {
      console.log('Finished', tempScore);
      setFinishModalVisible(true);
      return;
    }
    setQuiz(tempQuiz);
    setString(generateRandomString(12, tempQuiz.name));
    setAnswer('');
  };

  const appendChar = ch => {
    let temp = answer + ch;
    if (answer.length == quiz.name.length) return;
    setAnswer(temp);
    if (temp == quiz.name.toUpperCase()) {
      temp = score + 50;
      setScore(temp);
      nextQuiz(temp);
    }
  };

  const removeChar = i => {
    setAnswer(answer.slice(0, i) + answer.slice(i + 1));
  };

  const hintPuzzle = () => {
    if (score < hintCost) return;
    setScore(score - hintCost);
    setHintModalVisible(false);
    appendChar(quiz.name[0]);
  };
  const unlockPuzzle = () => {
    if (score < unlockCost) return;
    setScore(score - unlockCost);
    setUnlockModalVisible(false);
    nextQuiz();
  };

  const selectedCharsPanel = () => {
    var blocks = [];
    // console.log(answer.length, quiz.name.length);
    for (let i = 0; i < answer.length; i++) {
      blocks.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            removeChar(i);
          }}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#e51c2c', '#6b2b8c']}
            style={styles.charButton}>
            <Text style={styles.charText}>{answer[i]}</Text>
          </LinearGradient>
        </TouchableOpacity>,
      );
    }
    for (let i = answer.length; i < quiz.name.length; i++) {
      blocks.push(
        <TouchableOpacity key={i}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#e51c2c', '#6b2b8c']}
            style={styles.charButton}>
            <Text style={styles.charText}>_</Text>
          </LinearGradient>
        </TouchableOpacity>,
      );
    }
    return blocks;
  };

  const startModal = () => {
    return (
      <PuzzleModal
        visibility={startModalVisible}
        setVisibility={setStartModalVisible}
        modalTitle={'Start'}
        modalText={'Are You Going to Begin the Puzzle Game'}
        buttonNo={
          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={() => navigation.goBack()}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={puzzleBack}
            />
            <Text style={styles.buttonTextStyle}>Back</Text>
          </TouchableOpacity>
        }
        buttonYes={
          <TouchableOpacity
            style={[styles.button, styles.buttonYes]}
            onPress={() => {
              startPuzzle(), setStartModalVisible(false);
            }}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={puzzleBegin}
            />
            <Text style={styles.buttonTextStyle}>Now</Text>
          </TouchableOpacity>
        }
      />
    );
  };
  const hintModal = () => {
    return (
      <PuzzleModal
        visibility={hintModalVisible}
        setVisibility={setHintModalVisible}
        modalTitle={'Hint'}
        modalImage={<SvgXml width="100%" height="100" xml={puzzleHint} />}
        modalText={'REVEAL THE FIRST LETTER'}
        showWarning={score < hintCost}
        warningText={'Not enough Koins'}
        buttonNo={
          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={() => setHintModalVisible(false)}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={puzzleBrain}
            />
            <Text style={styles.buttonTextStyle}>No, I Will</Text>
          </TouchableOpacity>
        }
        buttonYes={
          <TouchableOpacity
            style={[styles.button, styles.buttonYes]}
            onPress={() => hintPuzzle()}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={coin}
            />
            <Text style={styles.buttonTextStyle}>{hintCost} Koins</Text>
          </TouchableOpacity>
        }
      />
    );
  };
  const unlockModal = () => {
    return (
      <PuzzleModal
        visibility={unlockModalVisible}
        setVisibility={setUnlockModalVisible}
        modalTitle={'Unlock'}
        modalImage={<SvgXml width="100%" height="100" xml={puzzleUnlock} />}
        modalText={'UNLOCK THIS PUZZLE'}
        showWarning={score < unlockCost}
        warningText={'Not enough Koins'}
        buttonNo={
          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={() => setUnlockModalVisible(false)}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={puzzleBrain}
            />
            <Text style={styles.buttonTextStyle}>No, I Will</Text>
          </TouchableOpacity>
        }
        buttonYes={
          <TouchableOpacity
            style={[styles.button, styles.buttonYes]}
            onPress={() => unlockPuzzle()}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={coin}
            />
            <Text style={styles.buttonTextStyle}>{unlockCost} Koins</Text>
          </TouchableOpacity>
        }
      />
    );
  };

  const finishModal = () => {
    return (
      <PuzzleModal
        visibility={finishModalVisible}
        setVisibility={setFinishModalVisible}
        modalImage={<SvgXml width="100%" height="100" xml={puzzleBrain} />}
        modalTitle={'Finished'}
        modalText={'Level Completed'}
        buttonNo={
          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={() => navigation.goBack()}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={puzzleBack}
            />
            <Text style={styles.buttonTextStyle}>Back</Text>
          </TouchableOpacity>
        }
        buttonYes={
          <TouchableOpacity
            style={[styles.button, styles.buttonYes]}
            onPress={() => {
              setFinishModalVisible(false), startPuzzle();
            }}>
            <SvgXml
              width="30"
              height="30"
              style={styles.scoreImage}
              xml={puzzleReplay}
            />
            <Text style={styles.buttonTextStyle}>Replay</Text>
          </TouchableOpacity>
        }
      />
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#610cb6', '#f51522']}
      style={styles.container}>
      {hintModal()}
      {unlockModal()}
      {finishModal()}
      {startModal()}
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml width="24" height="24" xml={arSvg} />
        </TouchableOpacity>

        <SideMenu navigation={navigation} />
      </View>
      <View style={styles.gameHeader}>
        <View style={styles.myScore}>
          <SvgXml width="50" height="50" style={styles.scoreImage} xml={coin} />
          <Text style={styles.scoreText}>{score}</Text>
        </View>
      </View>
      <View style={styles.imagePanel}>
        <Image style={styles.objectImage} source={quiz.image} />
      </View>
      <View style={styles.playPanel}>
        <View style={styles.hintPanel}>
          <TouchableOpacity onPress={() => setHintModalVisible(true)}>
            <View style={styles.hintButton}>
              <SvgXml width="100%" height="100%" xml={puzzleHint} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setUnlockModalVisible(true)}>
            <View style={styles.hintButton}>
              <SvgXml width="100%" height="100%" xml={puzzleUnlock} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.hintButton}>
              <SvgXml width="100%" height="100%" xml={add15} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.hintButton}>
              <SvgXml width="100%" height="100%" xml={puzzleShare} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.selectedCharsPanel}>{selectedCharsPanel()}</View>
        <View style={styles.selectingCharsPanel}>
          {Array.from(string).map((ch, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => appendChar(ch)}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 0, y: 0}}
                  colors={['#e51c2c', '#6b2b8c']}
                  style={styles.charButton}>
                  <Text style={styles.charText}>{ch}</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
};

export default WordPuzzleScreen;
