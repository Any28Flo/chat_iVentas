import app from './app';
import config from './config';


const PORT: number = config.PORT;

app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
})