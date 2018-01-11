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