export const appendCountMixin = {
    computed: {
        computedAppendCount() {
            return `${this.secondText} (${this.secondText.length})`;
        }
    }
}
