import React, { useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const MovieSearchContents = (props) => {
  // const [year, setYear] = useState(null);

  const { state, searchResult } = props;

  /*
  const fetchYear = (result) => {
    const year = result.data.movieInfoResult.movieInfo.Opendt;
    if(year != ''){

    }
    setYear(actorArray.map((item) => (item.peopleNm)));
  };
  */

  useEffect(() => {
  }, [state]);


  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Typography variant="h3">{state.movieNm}</Typography>
        <Typography variant="h6">
          <table>
            <tbody>
              <tr>
                <td>장르</td>
                {
                  state.genres.map((genre) => (
                    <td>{genre}</td>
                  ))
                }
              </tr>
              <tr>
                <td>감독</td>
                {
                  state.directors.map((director) => (
                    <td>{director}</td>
                  ))
                }
              </tr>
              <tr>
                <td>검색결과</td>
                <td>{searchResult}</td>
              </tr>
            </tbody>
          </table>
        </Typography>
      </div>
    </MuiThemeProvider>
  );
};

export default MovieSearchContents;
