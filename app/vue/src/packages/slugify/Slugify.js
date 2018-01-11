export default function (Vue) {
    let authenticatedUser = {};

    Vue.slugify = {
        slugify(string) {
            return string.toString().toLowerCase()
                .replace(/\_/g, '-')           // Replace _ with -
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text
        },
        createDate(string)
        {
            var _date = string.split('T')[0];
            _date = _date.split('-');
            
            switch(_date[1]) {
                case '01': _date[1] = 'januari'; break;
                case '02': _date[1] = 'februari'; break;
                case '03': _date[1] = 'maart'; break;
                case '04': _date[1] = 'april'; break;
                case '05': _date[1] = 'mei'; break;
                case '06': _date[1] = 'juni'; break;
                case '07': _date[1] = 'juli'; break;
                case '08': _date[1] = 'augustus'; break;
                case '09': _date[1] = 'september'; break;
                case '10': _date[1] = 'oktober'; break;
                case '11': _date[1] = 'november'; break;
                case '12': _date[1] = 'december'; break;
            }

            return _date[2] + " " + _date[1] + " " + _date[0];
        },
        string(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++)
            {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        },
    }

    Object.defineProperties(Vue.prototype, {
        $slugify: {
            get() {
                return Vue.slugify;
            }
        }
    });
}