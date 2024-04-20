import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const EvaluationCard = ({ overallBand, fluencyCoherence, lexicalResource, grammaticalRangeAccuracy, pronunciation, feedback, mistakes }) => {
  return (
    <div className="mb-8 max-w-xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Overall Band */}
      <div className="flex justify-center items-center mb-4">
        <div className="flex flex-col items-center">
          <p className="text-base md:text-lg font-semibold">Overall Band</p>
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28">
            <CircularProgress
              variant="determinate"
              value={(overallBand / 9) * 100}
              size={70}
              thickness={4}
              style={{ color: '#00E676' }}
            />
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {overallBand}
            </Typography>
          </div>
        </div>
      </div>
      {/* Sectional Bands */}
      <div className="flex flex-wrap justify-center md:justify-between space-x-0 md:space-x-5 text-xs rounded-lg items-center">
        {/* Fluency and Coherence */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="text-xs sm:text-sm font-bold">Fluency & Coherence</p>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <CircularProgress
              variant="determinate"
              value={(fluencyCoherence / 9) * 100}
              size={40}
              thickness={4}
              style={{ color: '#FF5722' }}
            />
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {fluencyCoherence}
            </Typography>
          </div>
        </div>
        {/* Lexical Resource */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="text-xs sm:text-sm font-bold">Lexical Resource</p>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <CircularProgress
              variant="determinate"
              value={(lexicalResource / 9) * 100}
              size={40}
              thickness={4}
              style={{ color: '#2196F3' }}
            />
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {lexicalResource}
            </Typography>
          </div>
        </div>
        {/* Grammatical Range & Accuracy */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="text-xs sm:text-sm font-bold">Grammatical Range & Accuracy</p>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <CircularProgress
              variant="determinate"
              value={(grammaticalRangeAccuracy / 9) * 100}
              size={40}
              thickness={4}
              style={{ color: '#9C27B0' }}
            />
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {grammaticalRangeAccuracy}
            </Typography>
          </div>
        </div>
        {/* Pronunciation */}
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <p className="text-xs sm:text-sm font-bold">Pronunciation</p>
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <CircularProgress
              variant="determinate"
              value={(pronunciation / 9) * 100}
              size={40}
              thickness={4}
              style={{ color: '#FF9800' }}
            />
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {pronunciation}
            </Typography>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Feedback</p>
        <p className="text-sm sm:text-base">{feedback}</p>
      </div>
      {mistakes && mistakes.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Mistakes and Corrections</p>
          {mistakes.map((mistake, index) => (
            <div key={index} className="mb-2">
              <p className="text-red-500 text-sm sm:text-base">Mistake: {mistake.mistake}</p>
              <p className="text-green-500 text-sm sm:text-base">Correction: {mistake.correction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EvaluationCard;