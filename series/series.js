export class Series {
    constructor(series) {
        if (series === '') throw "series cannot be empty";
        this.series = series;
  }

    slices(sliceLength) {
        if (sliceLength < 0) throw "slice length cannot be negative";
        if (sliceLength === 0) throw "slice length cannot be zero";
        if (sliceLength > this.series.length) throw "slice length cannot be greater than series length";

        const result = [];
        const tempResult = [];
        for (let i = 0; i < this.series.length; i++){
            if (i < sliceLength) {
                tempResult.push(+this.series[i]);
                continue;
            }

            result.push([...tempResult]);
            tempResult.shift();
            tempResult.push(+this.series[i]);
        }

        result.push(tempResult);
        return result;
  }
}