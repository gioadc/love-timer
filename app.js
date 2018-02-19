const demNgayYeuApp = () => {
    // edit this line
    this.startDate = '2016-10-05 03:00';

    this.msPerSecond = 1000;
    this.msPerMinute = this.msPerSecond * 60;
    this.msPerHour = this.secondsPerMinute * 60;
    this.msPerDay = this.secondsPerHour * 24;


    this.elementIds = {
        daysCounter: "daysCounter",
        hoursCounter: "hoursCounter",
        minutesCounter: "minutesCounter",
        secondsCounter: "secondsCounter"
    };

    this.init = () => {
        // init HTML elements
        this.counters.days = document.getElementById(this.elementIds.daysCounter);
        this.counters.hours = document.getElementById(this.elementIds.hoursCounter);
        this.counters.minutes = document.getElementById(this.elementIds.minutesCounter);
        this.counters.seconds = document.getElementById(this.elementIds.secondsCounter);

        // init start date
        this.startDate = new Date(this.startDate);

        // call init counter
        this.initCounter();
    };

    this.initCounter = () => {
        const currentDate = new Date();
        let timeDiff = Math.abs(currentDate.getTime() - this.startDate.getTime());

        this.diff = {};
        this.diff.days = Math.floor(timeDiff / this.msPerDay);
        timeDiff = timeDiff % this.msPerDay;

        this.diff.hours = Math.floor(timeDiff / this.msPerHour);
        timeDiff = timeDiff % this.msPerHour;

        this.diff.minutes = Math.floor(timeDiff / this.msPerMinute);
        timeDiff = timeDiff % this.msPerMinute;

        this.diff.seconds = Math.floor(timeDiff / this.msPerSecond);

        setInterval(this.updateCounter, 1000);
    };

    this.updateDiff = (diff) => {
        diff.keys.forEach(key => {
            if (diff[key] !== this.diff[key]) {
                this.counters[key].innerHTML = diff[key];
            }
        });

        this.diff = diff;
    };

    this.updateCounter = () => {
        const diff = { ...this.diff
        };

        if (diff.seconds === 59) {
            diff.seconds = 0;
            diff.minutes++;
        }

        if (diff.minutes === 60) {
            diff.minutes = 0;
            diff.hours++;
        }

        if (diff.hours === 24) {
            diff.hours = 0;
            diff.days++;
        }

        this.updateDiff(diff);

    };

}