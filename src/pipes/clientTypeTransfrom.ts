import { Pipe, PipeTransform } from '@angular/core';
//时间转化

@Pipe({ name: 'timepipe' })
export class timePipe implements PipeTransform {
  transform(value): any {
    if (value !== "") {
      var v = value.split(' ')[0].split('-')[1];
      var a = value.split(' ')[0].split('-')[2];
      value = v + "-" + a;
      return value
    }

  }
}
//客户类型
@Pipe({ name: 'clienttypepipe' })
export class clientTypePipe implements PipeTransform {
  transform(value): any {
    // if (typeof (value) !== 'number' || typeof (value) !== 'string') {
    //   throw 'keysPipe value must be number';
    // }
    // this.clientType = [
    //   {
    //     name: 'col1',
    //     options: [
    //       { text: '机构客户', value: '1' },
    //       { text: '体制客户', value: '2' },
    //       { text: '个人客户', value: '3' },
    //       { text: '其他客户', value: '3' }
    //     ]
    //   }
    // ];

    switch (value) {
      case 1:
        value = "机构客户"
        break;
      case 2:
        value = "体制客户"
        break;
      case 3:
        value = "个人客户"
        break;
      case 4:
        value = "其他客户"
        break;
    }
    return value;
  }
}

//客户级别
@Pipe({ name: 'clientrankpipe' })
export class clientRankPipe implements PipeTransform {
  transform(value): any {
    // if (typeof (value) !== 'number' || typeof (value) !== 'string') {
    //   throw 'keysPipe value must be number or string';
    // }
    // this.clientRank = [
    //   {
    //     name: 'col2',
    //     options: [
    //       { text: '刚需', value: '1' },
    //       { text: '调研', value: '2' },
    //       { text: '了解', value: '3' },
    //     ]
    //   }
    // ];

    switch (value) {
      case 1:
        value = "刚需"
        break;
      case 2:
        value = "调研"
        break;
      case 3:
        value = "了解"
        break;
    }
    return value;
  }
}
//客户需求
@Pipe({ name: 'clientneedpipe' })
export class clientNeedPipe implements PipeTransform {
  transform(value): any {
    // if (typeof (value) !== 'number' || typeof (value) !== 'string') {
    //   throw 'keysPipe value must be number';
    // }
    // this.clientDemand = [
    //   {
    //     name: 'col3',
    //     options: [
    //       { text: '大班直播', value: '1' },
    //       { text: '小班互动', value: '2' },
    //       { text: '双师', value: '3' },
    //       { text: 'SDK', value: '4' },
    //       { text: '换LOGO', value: '5' },
    //       { text: '大监控', value: '6' },
    //       { text: '个性定制', value: '7' },

    //     ]
    //   }
    // ]
    switch (value) {
      case 1:
        value = "大班直播"
        break;
      case 2:
        value = "小班互动"
        break;
      case 3:
        value = "双师"
        break;
      case 4:
        value = "SDK"
        break;
      case 5:
        value = "换LOGO"
      case 6:
        value = "大监控"
      case 7:
        value = "个性定制"
    }
    return value;
  }
}
//客户来源
@Pipe({ name: 'clientsourepipe' })
export class clientSourePipe implements PipeTransform {
  transform(value): any {
    // if (typeof (value) !== 'number' || typeof (value) !== 'string') {
    //   throw 'keysPipe value must be number';
    // }
    // this.clientSource = [
    //   {
    //     name: 'col4',
    //     options: [
    //       { text: '网站', value: '1' },
    //       { text: '待激活', value: '2' },
    //       { text: '活动', value: '3' },
    //       { text: '其他', value: '4' },
    //     ]
    //   }
    // ]
    switch (value) {
      case 1:
        value = "网站"
        break;
      case 2:
        value = "待激活"
        break;
      case 3:
        value = "活动"
        break;
      case 4:
        value = "其他"
        break;

    }
    return value;
  }
}
//客户状态
@Pipe({ name: 'clientstatuspipe' })
export class clientStatusPipe implements PipeTransform {
  transform(value): any {
    // if (typeof (value) !== 'number' || typeof (value) !== 'string') {
    //   throw 'keysPipe value must be number';
    // }
    // this.clientStatus = [
    //   {
    //     name: 'col5',
    //     options: [
    //       { text: '体验了解', value: '1' },
    //       { text: '已签约', value: '2' },
    //       { text: '切换人', value: '3' },
    //     ]
    //   }
    // ]
    switch (value) {
      case 1:
        value = "体验了解"
        break;
      case 2:
        value = "已签约"
        break;
      case 3:
        value = "切换人"
        break;
    }
    return value;

  }

}


