import axiosInstance from './instance';

const createGame = async (password) => {
  const { data } = await axiosInstance.post(
    `/CreateGameSession?Secret=${password}`
  );
  return data;
};

const joinGame = async (gameSessionId) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { data } = await axiosInstance.post(
    `/JoinGameSession?Username=${user?.username}&GameSessionId=${gameSessionId}`
  );
  return data;
};

const startGame = async () => {
  const secret = sessionStorage.getItem('secret') || null;
  const GameSessionId = sessionStorage.getItem('startSession') || null;

  const { data } = await axiosInstance.post(
    `/StartGameSession?Secret=${secret}&GameSessionId=${GameSessionId}`
  );
  return data;
};

const endGame = async (GameSessionId) => {
  const secret = sessionStorage.getItem('secret') || null;

  const { data } = await axiosInstance.post(
    `/EndGameSession?GameSessionId=${GameSessionId}&Secret=${secret}`
  );
  return data;
};

const SubmitAnswers = async (GameSessionId) => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const { data } = await axiosInstance.post(
    `/SubmitAnswers?GameSessionId=${GameSessionId}&Username=${user?.username}`
  );
  return data;
};

const getResults = async (GameSessionId) => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const { data } = await axiosInstance.get(
    `/GetGameSessionResults?GameSessionId=${GameSessionId}&Username=${user?.username}`
  );
  return data;
};

const getSessionPlayers = async (GameSessionId) => {
  const { data } = await axiosInstance.get(
    `/GetSessionPlayers?GameSessionId=${GameSessionId}`
  );
  return data;
};

const getQuestions = async (GameSessionId) => {
  const { data } = await axiosInstance.get(
    `/GetSessionQuestions?GameSessionId=${GameSessionId}`
  );
  return data;
};

const checkGameStatus = async (GameSessionId) => {
  const { data } = await axiosInstance.get(
    `/GetSessionQuestions?GameSessionId=${GameSessionId}`
  );
  return data;
};
export {
  createGame,
  joinGame,
  endGame,
  SubmitAnswers,
  startGame,
  getResults,
  checkGameStatus,
  getSessionPlayers,
  getQuestions,
};
