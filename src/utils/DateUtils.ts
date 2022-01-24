import moment from 'moment';

class DateUtils {

    public formatarData(dataAtendimento: string): string {
        dataAtendimento = moment(dataAtendimento).format('YYYY-MM-DD HH:mm:ss');
        return dataAtendimento;
    }

    public isDataValida(dataAtendimento: string): boolean {
        const hoje = moment().format('YYYY-MM-DD HH:mm:ss');
        
        return moment(dataAtendimento).isSameOrAfter(hoje);
    }
}

export default new DateUtils();