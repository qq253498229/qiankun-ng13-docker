export class QiankunUtil {
  private static microAppInstance: QiankunUtil;
  public onGlobalStateChange: any;
  public setGlobalState: any;
  public offGlobalStateChange: any;

  private constructor() {
  }

  public static getInstance() {
    if (!QiankunUtil.microAppInstance) {
      QiankunUtil.microAppInstance = new QiankunUtil();
    }
    return QiankunUtil.microAppInstance;
  }

  public setMicroAppStateActions(
    onGlobalStateChange: any,
    setGlobalState: any,
    offGlobalStateChange: any,
  ) {
    QiankunUtil.microAppInstance.onGlobalStateChange = onGlobalStateChange;
    QiankunUtil.microAppInstance.setGlobalState = setGlobalState;
    QiankunUtil.microAppInstance.offGlobalStateChange = offGlobalStateChange;
  }
}
