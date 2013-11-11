@player1_lives = 3
@player2_lives = 3
@current_player = 1

def check_lives
  if (@player1_lives > 0) && (@player2_lives > 0)
    return true
  else
    return false
  end
end

def get_answer(op, x, y)
  if op == 1
    op = " + "
  elsif op == 2
    op = " - "
  else
    op = " x "
  end

  puts "Player #{@current_player}: What does #{x} #{op} #{y} equal?"
  answer = gets.chomp
end


def switch_player
  if @current_player == 1
    @current_player = 2
    puts "You have #{@player1_lives} lives remaining."
  else
    @current_player = 1
    puts "You have #{@player2_lives} lives remaining."
  end
end

def calculate_answer(op, x, y)
  if op == 1
    x + y
  elsif op == 2
    x - y
  else
    x * y
  end
end

def announce_winner
  if @player1_lives == 0
    puts "Player 2 wins!"
  else
    puts "Player 1 wins!"
  end
end

def check_answer(answer, right_answer)
  if answer == right_answer
    puts "Correct."
  else
    if @current_player == 1
      @player1_lives -= 1
      puts "Wrong! #{@player1_lives} lives left!"
    else
      @player2_lives -= 1
      puts "Wrong! #{@player2_lives} lives left!"
    end
  end
end

loop do
  x = rand(20)
  y = rand(20)
  op = rand(3)

  right_answer = calculate_answer(op, x, y)
  answer = get_answer(op, x, y)

  check_answer(answer, right_answer)
  switch_player

  break unless check_lives
end

announce_winner