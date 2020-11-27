require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = FactoryBot.build(:user)
  end

  describe 'ユーザー新規登録' do
    context '正常な動作の確認' do
      it 'usernameとemailとpasswordとpassword_confirmationが存在すれば登録できること' do
        expect(@user).to be_valid
      end

      it 'usernameに全角漢字が含まれていても登録できること' do
        @user.username = '感じ'
        expect(@user).to be_valid
      end

      it 'usernameに全角かなが含まれていても登録できること' do
        @user.username = 'かな'
        expect(@user).to be_valid
      end

      it 'usernameに全角カナが含まれていても登録できること' do
        @user.username = 'カナ'
        expect(@user).to be_valid
      end

      it 'usernameに全角数字が含まれていても登録できること' do
        @user.username = '１２'
        expect(@user).to be_valid
      end
    end

    context '登録できない時の確認' do
      it 'usernameが空欄では登録ができないこと' do
        @user.username = nil
        @user.valid?
        expect(@user.errors.full_messages).to include("Username can't be blank")
      end

      it 'usernameが既に使用されているときは登録ができないこと' do
        @user.save
        another_user = FactoryBot.build(:user, username: @user.username)
        another_user.valid?
        expect(another_user.errors.full_messages).to include('Username has already been taken')
      end

      it 'usernameが51文字以上では登録ができないこと' do
        @user.username += 'a'
        @user.valid?
        expect(@user.errors.full_messages).to include('Username is too long (maximum is 50 characters)')
      end

      it 'emailが空欄では登録ができないこと' do
        @user.email = nil
        @user.valid?
        expect(@user.errors.full_messages).to include("Email can't be blank")
      end

      it 'emailが既に使用されているときは登録ができないこと' do
        @user.save
        another_user = FactoryBot.build(:user, email: @user.email)
        another_user.valid?
        expect(another_user.errors.full_messages).to include('Email has already been taken')
      end

      it 'passwordが空欄では登録ができないこと' do
        @user.password = nil
        @user.valid?
        expect(@user.errors.full_messages).to include("Password can't be blank")
      end

      it 'passwordとpassword_confirmationが一致しないと登録ができないこと' do
        @user.password_confirmation = "#{@user.password}1"
        @user.valid?
        expect(@user.errors.full_messages).to include("Password confirmation doesn't match Password")
      end
    end
  end
end
