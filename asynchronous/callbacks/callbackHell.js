// 중첩 콜백과 콜백 지옥(callback hell)
// - 앞선 비동기 작업이 끝난 뒤 다음 작업을 실행할 때 콜백을 중첩할 수 있음
// - 단계가 늘어나면 코드가 깊어져 흐름과 에러 처리를 파악하기 어려워짐

function reserveSeat(callback) {
  setTimeout(() => {
    console.log("1. 좌석 예약 완료");
    callback(null, "A-12");
  }, 150);
}

function prepareTicket(seatNumber, callback) {
  setTimeout(() => {
    console.log(`2. ${seatNumber} 좌석 티켓 준비 완료`);
    callback(null, { seatNumber, ticketNumber: "T-204" });
  }, 150);
}

function sendNotice(ticket, callback) {
  setTimeout(() => {
    console.log(`3. 티켓 ${ticket.ticketNumber} 알림 전송 완료`);
    callback(null, "모든 작업이 완료되었습니다.");
  }, 150);
}

// 작업이 순서대로 끝나야 하므로 콜백 안에서 다음 작업을 호출함
reserveSeat((error, seatNumber) => {
  if (error) {
    console.error(error.message);
    return;
  }

  prepareTicket(seatNumber, (error, ticket) => {
    if (error) {
      console.error(error.message);
      return;
    }

    sendNotice(ticket, (error, message) => {
      if (error) {
        console.error(error.message);
        return;
      }

      console.log(message);
    });
  });
});

// 출력 순서:
// 1. 좌석 예약 완료
// 2. A-12 좌석 티켓 준비 완료
// 3. 티켓 T-204 알림 전송 완료
// 모든 작업이 완료되었습니다.
//
// 콜백 단계가 더 많아지면 중첩이 깊어짐.
// Promise를 사용하면 이 흐름을 체이닝 형태로 정리할 수 있음.
